import type * as T from '@/common/types/game'

// This calculation method gives a lot of importance to the last votes, 
// You can never have voted for one hero but the last vote you picked him over your number 1 
// and he becomes your new number 1 even if he was number 100 before
// Doesn't take into account your voting history
export function calculateRankFromVotes(votes : T.VoteRound[]) {
  const heroesLadder = votes.reduce((ladder, vote) => {

    const BASE_SCORE = 500

    const heroes = vote.heroes.map(h => { 
      const ladderIndex = ladder.findIndex(l => l.id === h.id)
      const heroScore = ladderIndex >= 0 ? ladder[ladderIndex].score : BASE_SCORE
      return {
        id : h.id, 
        score : heroScore,
        ladderIndex : ladderIndex,
        isPicked : h.isPicked
      }
    })

    const roundScores = heroes.map(a => a.score)
    const highestScore = Math.max(...roundScores)
    const lowestScore = Math.min(...roundScores)
    const roundAvg = roundScores.reduce((a, b) => a + b) / roundScores.length;
    const roundWeight = roundAvg / BASE_SCORE

    for(var i=0; i<heroes.length; i++){
      var hero = heroes[i]

      // New hero
      if(hero.ladderIndex === -1){
        if(hero.isPicked){
          hero.score = highestScore + 50
        }
        else {
          hero.score = hero.score - 50
        }

        ladder.push({id : hero.id, score : hero.score})
      }

      // Hero have already been voted on
      if(hero.ladderIndex >= 0){

        if(hero.isPicked){
          hero.score = highestScore +
        }
        else {
          hero.score = lowestScore +
        }

        ladder[hero.ladderIndex] = {id : hero.id, score : hero.score}
      }
    }
    return ladder
  }, [])

  return heroesLadder.sort((a, b) => b.score - a.score)
}
