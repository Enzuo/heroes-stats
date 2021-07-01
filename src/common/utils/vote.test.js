import {calculateRankFromVotes} from './vote'



test('test simple vote ladder', () => {
  const votes = [
    {heroes : [{id:1, isPicked: true },{id:2, isPicked: false},{id:3, isPicked: false}]},
    {heroes : [{id:4, isPicked: false},{id:5, isPicked: false},{id:6, isPicked: true}]},
    {heroes : [{id:1, isPicked: true },{id:3, isPicked: false},{id:5, isPicked: false}]},
    {heroes : [{id:2, isPicked: true },{id:4, isPicked: false},{id:6, isPicked: false}]}, // 6 picked over 2
  ]

  expect(calculateRankFromVotes(votes)).toStrictEqual([ 5, 4, 6, 3, 2, 1 ])
});

test('test tricky vote ladder', () => {
  const votes = [
    {heroes : [{id:1, isPicked: true },{id:3, isPicked: false},{id:5, isPicked: false}]},
    {heroes : [{id:2, isPicked: true },{id:3, isPicked: false},{id:4, isPicked: false}]},
    {heroes : [{id:2, isPicked: true },{id:3, isPicked: false},{id:4, isPicked: false}]},
    {heroes : [{id:2, isPicked: true },{id:3, isPicked: false},{id:4, isPicked: false}]},
    {heroes : [{id:2, isPicked: false},{id:3, isPicked: false},{id:5, isPicked: true}]}, // 5 picked over 2
  ]
  
  expect(calculateRankFromVotes(votes)).toStrictEqual([ 4, 3, 2, 5, 1 ])
});

test('test getting on the very top of the vote ladder', () => {
  const votes = [
    {heroes : [{id:1, isPicked: true },{id:2, isPicked: false},{id:3, isPicked: false}]},
    {heroes : [{id:4, isPicked: true },{id:1, isPicked: false},{id:2, isPicked: false}]},
  ]

  expect(calculateRankFromVotes(votes)).toStrictEqual([ 3, 2, 1, 4 ])
});
