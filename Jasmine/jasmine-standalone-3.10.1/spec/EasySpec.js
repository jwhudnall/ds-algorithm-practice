describe('twoSum', () => {
  it('Returns the correct indices for [2,7,11,15]', () => {
    var actual = twoSum([2, 7, 11, 15], 9);
    var expected = [0, 1];
    expect(actual).toEqual(expected);
  });
  it('Returns the correct indices for [3,2,4]', () => {
    var actual = twoSum([3, 2, 4], 6);
    var expected = [1, 2];
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

describe('mergeTwoLists', () => {
  it('Returns \'[1,1,2,3,4,4]\' for lists \'[1,2,4]\' and \'[1,3,4]\'', () => {
    var actual = mergeTwoLists([1,2,4], [1,3,4]);
    expect(actual).toEqual([1,1,2,3,4,4]);
  });
  it('Returns \'[1,1,1,2,3,3,4,5,7]\' for lists \'[1,1,2,3,7]\' and \'[1,3,4,5]\'', () => {
    var actual = mergeTwoLists([1,2,4], [1,3,4]);
    expect(actual).toEqual([1,1,1,2,3,3,4,5,7]);
  });

})