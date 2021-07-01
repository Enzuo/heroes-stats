import type * as T from '@/common/types/game'

// This calculation method gives a lot of importance to the last votes, 
// You can never have voted for one hero but the last vote you picked him over your number 1 
// and he becomes your new number 1 even if he was number 100 before
// Doesn't take into account your voting history
export function calculateRankFromVotes(votes : T.VoteRound[]) {
  const heroesLadder = votes.reduce((ladder, vote) => {
    const pickedHero = vote.heroes.reduce((arr, h) => h.isPicked ? arr : h.id, null)

    const heroesWithPos = vote.heroes.map(h => { return {
      id : h.id, 
      index : ladder.findIndex(l => l === h.id), 
      isPicked : h.isPicked
    }}).sort((a,b) => (b.isPicked ? 1 : 0) - (a.isPicked ? 1 : 0)) // first one is the picked one
    const allPos = heroesWithPos.map(a => a.index)
    const highestPos = Math.max(...allPos)

    for(var i=0; i<heroesWithPos.length; i++){
      var hero = heroesWithPos[i]

      // hero has to be moved up
      if(hero.isPicked && highestPos !== hero.index){
        ladder.splice(highestPos+1, 0, hero.id)
        if(hero.index >= 0){
          ladder.splice(hero.index, 1)
        }
      }

      // hero not yet in the lader
      else if(hero.index < 0){
        ladder.unshift(hero.id)
      }
    }
    return ladder
  }, [])

  return heroesLadder
}
