import {calculateRankFromVotes} from './vote'



test('simple vote ladder', () => {
  const votes = [
    {heroes : [{id:1, isPicked: true },{id:2, isPicked: false},{id:3, isPicked: false}]},
    {heroes : [{id:4, isPicked: false},{id:5, isPicked: false},{id:6, isPicked: true}]},
    {heroes : [{id:1, isPicked: true },{id:3, isPicked: false},{id:5, isPicked: false}]},
    {heroes : [{id:2, isPicked: true },{id:4, isPicked: false},{id:6, isPicked: false}]}, // 2 picked over 6
  ]
  const playerRank = [1, 2, 6]

  const result = calculateRankFromVotes(votes).map(a => a.id)
  expect(result).toContain(playerRank)
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
  
  expect(calculateRankFromVotes(votes)).toContain(playerRank)
});

test('getting on the very top of the vote ladder', () => {
  const votes = [
    {heroes : [{id:1, isPicked: true },{id:2, isPicked: false},{id:3, isPicked: false}]},
    {heroes : [{id:4, isPicked: true },{id:1, isPicked: false},{id:2, isPicked: false}]}, // 4 picked over 1
  ]

  expect(calculateRankFromVotes(votes)).toStrictEqual([ 3, 2, 1, 4 ])
});

test('small number of votes for different ids', () => {
  const votes = [
    {heroes : [{id:1, isPicked: true },{id:2, isPicked: false},{id:3, isPicked: false}]},
    {heroes : [{id:4, isPicked: true },{id:5, isPicked: false},{id:6, isPicked: false}]},
  ]

  expect(calculateRankFromVotes(votes)).toStrictEqual([ 3, 2, 1, 4 ])
});
