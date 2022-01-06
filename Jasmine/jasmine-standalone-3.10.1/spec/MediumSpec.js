describe('productExceptSelf', () => {
  it('Should return [24,12,8,6] for nums = [1,2,3,4]', () => {
    expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
  });
  it('Should return [0,0,9,0,0] for nums = [-1,1,0,-3,3]', () => {
    expect(productExceptSelf([-1,1,0,-3,3])).toEqual([0,0,9,0,0]);
  });
});

describe('deleteMiddle', () => {
  beforeEach(() => {
    function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
    }
  })
  it('Should return null for list of size n = 1', () => {
    let first = new ListNode(1);
    expect(deleteMiddle(first)).toBeFalsy(); // Should return empty
  });
  it('Should return null for list of size n = 2', () => {
    let first = new ListNode(1);
    let second = new ListNode(2);
    first.next = second; // should return first node only
    expect(deleteMiddle(first)).toBe(first)
  }
});