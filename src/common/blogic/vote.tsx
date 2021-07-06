import type * as T from 'src/common/types/game'

// This calculation method gives a lot of importance to the last votes, 
// You can never have voted for one hero but the last vote you picked him over your number 1 
// and he becomes your new number 1 even if he was number 100 before
// Doesn't take into account your voting history
export function calculateRankFromVotes(votes : T.VoteRound[]) {
  const heroesLadder = votes.reduce((ladder, vote) => {

    const BASE_RATING = 1500

    const heroes = vote.heroes.map(h => { 
      var hero = ladder.find(l => l.id === h.id)
      if(!hero) {
        hero = {
          id : h.id,
          rating : BASE_RATING,
          rounds : 0,
        }
        ladder.push(hero)
      }
      hero.rounds += 1
      return hero
    })

    const winnerId = vote.heroes.reduce((id, h) => h.isPicked ? h.id : id, null)
    const winner = heroes.find(h => h.id === winnerId)
    const loosers = heroes.reduce((arr, h) => h.id !== winnerId ? arr.concat(h) : arr, [])

    const ratingChangeForWinner = []
    for(var i=0; i<loosers.length; i++){
      const looser = loosers[i]
      const ratingDiff = Math.abs(winner.rating - looser.rating)
      // close to 0.5 if diff = 0, close to 1 if diff = 100
      var expectedValue = 1 / (1 + Math.pow(10, ratingDiff/100)) 
      // if winner rating was lower than inverse expectedValue
      expectedValue = winner.rating > looser.rating ? expectedValue : 1 - expectedValue 

      
      const ratingChange = Math.round(50 * expectedValue)
      // console.log('match between', winner.id, winner.rating, ' & ', looser.id, looser.rating, ' : ', expectedValue, ratingDiff, ratingChange)

      ratingChangeForWinner.push(ratingChange)
      looser.rating -= ratingChange
    }
    for(var i=0; i<ratingChangeForWinner.length; i++){
      winner.rating += ratingChangeForWinner[i]
    }

    return ladder
  }, [])

  return heroesLadder.sort((a, b) => b.rating - a.rating)
}
