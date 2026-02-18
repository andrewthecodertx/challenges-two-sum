const twoSum = require('./solution');

describe('Two Sum', () => {
  test('finds two numbers that add up to target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('handles non-adjacent indices', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test('handles duplicate numbers', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test('handles different order', () => {
    expect(twoSum([1, 5, 3], 8)).toEqual([1, 2]);
  });
});
