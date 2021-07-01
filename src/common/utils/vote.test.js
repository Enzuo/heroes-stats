const {calculateRankFromVotes} = require('./vote');

test('test simple vote ladder', () => {
  expect(calculateRankFromVotes()).toBe(3);
});
