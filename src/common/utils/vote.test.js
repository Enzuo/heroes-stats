import {calculateRankFromVotes} from './vote'



test('test simple vote ladder', () => {
  const votes = [
    {heroes : [{id:1, isPicked: true },{id:2, isPicked: false},{id:3, isPicked: false}]},
    {heroes : [{id:4, isPicked: false},{id:5, isPicked: false},{id:6, isPicked: true}]},
    {heroes : [{id:1, isPicked: true },{id:3, isPicked: false},{id:5, isPicked: false}]},
    {heroes : [{id:2, isPicked: true },{id:4, isPicked: false},{id:6, isPicked: false}]}, // 6 picked over 2
  ]

  expect(calculateRankFromVotes(votes)).toStrictEqual(
    [[1, 10], [6, 5], [2, 5], [5, 0], [4, 0], [3, 0]]
  )
});

test('test tricky vote ladder', () => {
  const votes = [
    {heroes : [{id:1, isPicked: true },{id:3, isPicked: false},{id:5, isPicked: false}]},
    {heroes : [{id:2, isPicked: true },{id:3, isPicked: false},{id:4, isPicked: false}]},
    {heroes : [{id:2, isPicked: true },{id:3, isPicked: false},{id:4, isPicked: false}]},
    {heroes : [{id:2, isPicked: true },{id:3, isPicked: false},{id:4, isPicked: false}]},
    {heroes : [{id:2, isPicked: false},{id:3, isPicked: false},{id:5, isPicked: true}]}, // 5 picked over 2
  ]
  
  expect(calculateRankFromVotes(votes)).toBe(3)
});
