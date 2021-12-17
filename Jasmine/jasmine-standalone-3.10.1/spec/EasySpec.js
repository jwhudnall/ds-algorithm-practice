describe('twoSum', () => {
  it('Returns the correct indices', () => {
    var actual = twoSum([2,7,11,15], 9);
    var expected = [0, 1];
    expect(actual).toEqual(expected);
  })
})