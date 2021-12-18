// LeetCode Problem Solutions - Difficulty: Easy

// Two Sum - https://leetcode.com/problems/two-sum/
// Notes: Solution uses a hash map to reduce complexity to N.
var twoSum = function (nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    const need = target - val;
    if (hash.hasOwnProperty(need)) {
      return [hash[need], i];
    }
    hash[val] = i;
  }
  return [];
};

// Valid Parentheses - https://leetcode.com/problems/valid-parentheses/
var isValid = function (s) {
  var stack = [];
  var opening = ['(', '[', '{'];
  const bracketPairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ]);

  for (let i = 0; i < s.length; i++) {
    var char = s[i];
    var stackTop = stack[stack.length - 1];

    if (opening.includes(char)) {
      stack.push(char);
    } else if (bracketPairs.get(char) === stackTop && stack.length !== 0) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

// Roman to Integer - https://leetcode.com/problems/roman-to-integer/
var romanToInt = function (s) {
  const values = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let current = values[s[i]];
    let next = values[s[i + 1]];

    if (current < next) {
      total += next - current;
      i++;
    } else {
      total += current;
    }
  }

  return total;
};

// Longest Common Prefix - https://leetcode.com/problems/longest-common-prefix/
var longestCommonPrefix = function (strs) {
  // Use double loop to compare all chars of first word with all chars of others

  // Handle empty array, array with 1 word
  let prefix = '';
  if (strs.length === 0 || strs.length === 1) {
    return prefix;
  }

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return prefix;
      }
    }
    prefix += char;
  }
  return prefix;
};