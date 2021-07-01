import {calculateRankFromVotes} from './vote'



test('test simple vote ladder', () => {
  const votes = [
    {heroes : [{id:1, isPicked: true },{id:2, isPicked: false},{id:3, isPicked: false}]},
    {heroes : [{id:4, isPicked: false},{id:5, isPicked: false},{id:6, isPicked: true}]},
    {heroes : [{id:1, isPicked: true },{id:3, isPicked: false},{id:5, isPicked: false}]},
    {heroes : [{id:2, isPicked: true },{id:4, isPicked: false},{id:6, isPicked: false}]},
  ]

  expect(calculateRankFromVotes(votes)).toStrictEqual(
    [[1, 10], [6, 5], [2, 5], [5, 0], [4, 0], [3, 0]]
  )
});
