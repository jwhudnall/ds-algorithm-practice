describe('productExceptSelf', () => {
  it('Should return [24,12,8,6] for nums = [1,2,3,4]', () => {
    expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
  });
  it('Should return [0,0,9,0,0] for nums = [-1,1,0,-3,3]', () => {
    expect(productExceptSelf([-1,1,0,-3,3])).toEqual([0,0,9,0,0]);
  });
});