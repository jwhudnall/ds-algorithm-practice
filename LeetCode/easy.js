// LeetCode Problem Solutions - Difficulty: Easy

// Two Sum - https://leetcode.com/problems/two-sum/
// Notes: Solution uses a hash map to reduce complexity to N.
var twoSum = function (nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[target - nums[i]] = i;
    } else {
      return [hash[nums[i]], i];
    }
  }
}

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

// 283. Move Zeroes - https://leetcode.com/problems/move-zeroes/
var moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};

// 35. Search Insert Position - https://leetcode.com/problems/search-insert-position/
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

// 53. Maximum SubArray - https://leetcode.com/problems/maximum-subarray/
// Reference: https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
var maxSubArray = function (nums) {
  if (nums.length === 0) return nums[0];
  let max = nums[0];
  let subArrSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    subArrSum = Math.max(nums[i], nums[i] + subArrSum);
    if (subArrSum > max) max = subArrSum;
  }
  return max;
};

// 217. Contains Duplicate - https://leetcode.com/problems/contains-duplicate/
var containsDuplicate = function (nums) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = i;
    } else {
      return true;
    }
  }
  return false;
};

// 121. Best Time to Buy and Sell Stock - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
var maxProfit = function (prices) {
  let gain = 0;
  let buy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    let delta = prices[i] - buy;
    if (prices[i] < buy) {
      buy = prices[i]
    }
    if (delta > gain) {
      gain = delta;
    }
  }
  return gain;
};

// 58. Length of Last Word
// Solution using buil-in JS methods:

// var lengthOfLastWord = function(s) {
//   let str = s.slice().trimRight().split(' ');
//   return str[str.length - 1].length;
// };

var lengthOfLastWord = function(s) {
  let charCount = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    let char = s[i];
    if (char !== ' ') {
      charCount++;
    }
    if (char === ' ' && charCount >= 1) {
      return charCount;
    }
  }
  return charCount;
};

// 70. Climbing Stairs - https://leetcode.com/problems/climbing-stairs/
var climbStairs = function(n) {
  let one = 1;
  let two = 1;

  for (let i = 2; i <= n>; i++) {
    let temp = one;
    one = one + two;
    two = temp;
  }
  return one;
};