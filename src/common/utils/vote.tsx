import type * as T from '@/common/types/game'

export function calculateRankFromVotes(votes : T.VoteRound[]) {
  const totalVotes = votes.reduce((arr, r) => {
    for(var i=0; i < r.heroes.length; i++) {
      var h = r.heroes[i]
      var score = h.isPicked ? 10 : 0
      if(!arr[h.id]){
        arr[h.id] = [score, 1]
      }
      else {
        arr[h.id][0] += score
        arr[h.id][1] += 1
      }
    }
    return arr
  }, {})

  const mappedHeroes = Object.entries(totalVotes).map(a => [parseInt(a[0]), a[1][0]/a[1][1]] ) // score/nb occurences
  return mappedHeroes.sort((a, b) => a[1] < b[1] ? 1 : -1 )
}
