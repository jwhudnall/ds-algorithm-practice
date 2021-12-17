describe('twoSum', () => {
  it('Returns the correct indices for [2,7,11,15]', () => {
    var actual = twoSum([2,7,11,15], 9);
    var expected = [0, 1];
    expect(actual).toEqual(expected);
  });
  it('Returns the correct indices for [3,2,4]', () => {
    var actual = twoSum([3,2,4], 6);
    var expected = [1,2];
    expect(actual).toEqual(expected);
  })
})