import {calculateRankFromVotes} from './vote'



test('simple vote ladder', () => {
  const votes = [
    {heroes : [{id:1, isPicked: true },{id:2, isPicked: false},{id:3, isPicked: false}]},
    {heroes : [{id:4, isPicked: false},{id:5, isPicked: false},{id:6, isPicked: true}]},
    {heroes : [{id:1, isPicked: true },{id:3, isPicked: false},{id:5, isPicked: false}]},
    {heroes : [{id:2, isPicked: true },{id:4, isPicked: false},{id:6, isPicked: false}]}, // 2 picked over 6
  ]
  const playerRank = [1, 2, 6]

  const result = calculateRankFromVotes(votes)
  const resultMapped = result.map(a => a.id).toString()
  expect(resultMapped).toContain(playerRank.toString())
});

test('5 picked over 2 (2 won a lot of rounds)', () => {
  const votes = [
    {heroes : [{id:1, isPicked: true },{id:3, isPicked: false},{id:5, isPicked: false}]},
    {heroes : [{id:2, isPicked: true },{id:3, isPicked: false},{id:4, isPicked: false}]},
    {heroes : [{id:2, isPicked: true },{id:3, isPicked: false},{id:4, isPicked: false}]},
    {heroes : [{id:2, isPicked: true },{id:3, isPicked: false},{id:4, isPicked: false}]},
    {heroes : [{id:2, isPicked: false},{id:3, isPicked: false},{id:5, isPicked: true}]}, // 5 picked over 2
  ]
  const playerRank = [1, 5, 2]
  
  const result = calculateRankFromVotes(votes)
  const resultMapped = result.map(a => a.id).toString()
  expect(resultMapped).toContain(playerRank.toString())
});

test('getting on the very top of the vote ladder', () => {
  const votes = [
    {heroes : [{id:1, isPicked: true },{id:2, isPicked: false},{id:3, isPicked: false}]},
    {heroes : [{id:4, isPicked: true },{id:1, isPicked: false},{id:2, isPicked: false}]}, // 4 picked over 1
  ]
  const playerRank = [4, 1]

  const result = calculateRankFromVotes(votes)
  const resultMapped = result.map(a => a.id).toString()
  expect(resultMapped).toContain(playerRank.toString())
});
