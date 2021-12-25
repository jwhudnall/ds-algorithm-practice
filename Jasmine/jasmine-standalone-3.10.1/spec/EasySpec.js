describe('twoSum', () => {
  it('Returns the correct indices for [2,7,11,15] with a target of 9', () => {
    var actual = twoSum([2, 7, 11, 15], 9);
    var expected = [0, 1];
    expect(actual).toEqual(expected);
  });
  it('Returns the correct indices for [3,2,4] with a target of 6', () => {
    var actual = twoSum([3, 2, 4], 6);
    var expected = [1, 2];
    expect(actual).toEqual(expected);
  })
  it('Returns the correct indices for [3,3] with a target of 6', () => {
    var actual = twoSum([3, 3], 6);
    var expected = [0, 1];
    expect(actual).toEqual(expected);
  })
});

describe('isValid', () => {
  it('Returns true for valid strings', () => {
    var actual = isValid('(){}[]');
    expect(actual).toBe(true);
  });
  it('Returns true for valid, complex strings', () => {
    var actual = isValid('[((){[]})]');
    expect(actual).toBe(true);
  });
  it('Returns false for invalid strings', () => {
    var actual = isValid('(]');
    expect(actual).toBe(false);
  });
  it('Returns false for invalid strings', () => {
    var actual = isValid('([{})]');
    expect(actual).toBe(false);
  });
});

describe('romanToInt', () => {
  it('Returns the correct value for \'III\'.', () => {
    var actual = romanToInt('III');
    expect(actual).toEqual(3);
  });
  it('Returns the correct value for \'XLIX\'.', () => {
    var actual = romanToInt('XLIX');
    expect(actual).toEqual(49);
  });
  it('Returns the correct value for \'LIV\'.', () => {
    var actual = romanToInt('LIV');
    expect(actual).toEqual(54);
  });
  it('Returns the correct value for \'LVIII\'.', () => {
    var actual = romanToInt('LVIII');
    expect(actual).toEqual(58);
  });
  it('Returns the correct value for \'MCMXCIV\'.', () => {
    var actual = romanToInt('MCMXCIV');
    expect(actual).toEqual(1994);
  });
});

describe('longestCommonPrefix', () => {
  it('Returns the common prefix \'fl\'', () => {
    var actual = longestCommonPrefix(["flower", "flow", "flight"]);
    expect(actual).toEqual('fl');
  });
  it('Returns the common prefix \'swe\'', () => {
    var actual = longestCommonPrefix(["sweden", "sweet", "sweat"]);
    expect(actual).toEqual('swe');
  });
  it('Returns empty string', () => {
    var actual = longestCommonPrefix(["dog", "racecar", "car"]);
    expect(actual).toEqual('');
  });
});

describe('moveZeroes', () => {
  it('Should correctly move zeroes to end for \'[0,1,0,3,12]\'', () => {
    let actual = moveZeroes([0, 1, 0, 3, 12]);
    expect(actual).toEqual([1, 3, 12, 0, 0]);
  });
  it('Should correctly move zeroes to end for \'[0]\'', () => {
    let actual = moveZeroes([0]);
    expect(actual).toEqual([0]);
  });
  it('Should correctly move zeroes to end for \'[0,5,0,4,0,3,0,2,0,1,0]\'', () => {
    let actual = moveZeroes([0, 5, 0, 4, 0, 3, 0, 2, 0, 1, 0]);
    expect(actual).toEqual([5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0]);
  });
  it('Should correctly move zeroes to end for \'[0,1,0,3,12]\'', () => {
    let actual = moveZeroes([0, 1, 0, 3, 12]);
    expect(actual).toEqual([1, 3, 12, 0, 0]);
  });
  it('Should correctly move zeroes to end for \'[0,0,1]\'', () => {
    let actual = moveZeroes([0, 0, 1]);
    expect(actual).toEqual([1, 0, 0]);
  });
});

describe('searchInsert', () => {
  it('Should return correct index for \'[1,3,5,6], 5\'', () => {
    let actual = searchInsert([1, 3, 5, 6], 5);
    expect(actual).toBe(2);
  });
  it('Should return correct index for \'[1,3,5,6], 2\'', () => {
    let actual = searchInsert([1, 3, 5, 6], 2);
    expect(actual).toBe(1);
  });
  it('Should return correct index for \'[1,3,5,6], 7\'', () => {
    let actual = searchInsert([1, 3, 5, 6], 7);
    expect(actual).toBe(4);
  });
});

describe('maxSubArray', () => {
  it('Should return a sum of 6 for \'[-2,1,-3,4,-1,2,1,-5,4]\'', () => {
    let actual = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    expect(actual).toEqual(6);
  })
  it('Should return a sum of 1 for \'[1]\'', () => {
    let actual = maxSubArray([1]);
    expect(actual).toEqual(1);
  })
  it('Should return a sum of 23 for \'[5,4,-1,7,8]\'', () => {
    let actual = maxSubArray([5, 4, -1, 7, 8]);
    expect(actual).toEqual(23);
  })
})

describe('containsDuplicate', () => {
  it('Should return true for [1,2,3,1]', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });
  it('Should return false for [1,2,3,4]', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });
  it('Should return true for [1,1,1,3,3,4,3,2,4,2]', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});

describe('maxProfit', () => {
  it('Should return 5 for input [7,1,5,3,6,4]', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });
  it('Should return 0 for input [7,6,4,3,1]', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
  it('Should return 5 for input [1,6,2,5,6]', () => {
    expect(maxProfit([1, 6, 2, 5, 6])).toBe(5);
  });
});

describe('lengthOfLastWord', () => {
  it('Should return 5 for input "Hello World" ', () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
  });
  it('Should return 4 for input "   fly me   to   the moon  "', () => {
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
  });
  it('Should return 6 for input "luffy is still joyboy"', () => {
    expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
  });
  it('Should return 1 for input "a"', () => {
    expect(lengthOfLastWord("a")).toBe(1);
  });
  it('Should return 1 for input " a"', () => {
    expect(lengthOfLastWord(" a")).toBe(1);
  });
  it('Should return 1 for input "a "', () => {
    expect(lengthOfLastWord("a ")).toBe(1);
  });
});

describe('climbStairs', () => {
  it('Should return 2 for input: 2', () => {
    expect(climbStairs(2)).toEqual(2);
  });
  it('Should return 3 for input: 3', () => {
    expect(climbStairs(3)).toEqual(3);
  });
  it('Should return 8 for input: 5', () => {
    expect(climbStairs(5)).toEqual(8);
  });
});