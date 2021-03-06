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

var lengthOfLastWord = function (s) {
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
var climbStairs = function (n) {
  let one = 1;
  let two = 1;

  for (let i = 2; i <= n; i++) {
    let temp = one;
    one = one + two;
    two = temp;
  }
  return one;
};

// 242. Valid Anagram - https://leetcode.com/problems/valid-anagram/
var isAnagram = function (s, t) {
  const hash1 = {};
  const hash2 = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      let sChar = s[i].toLowerCase();
      hash1[sChar] = (hash1[sChar] || 0) + 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] !== ' ') {
      let tChar = t[i].toLowerCase();
      hash2[tChar] = (hash2[tChar] || 0) + 1;
    }
  }

  for (let key in hash1) {
    if (hash1[key] !== hash2[key]) {
      return false;
    }
  }

  return Object.keys(hash1).length === Object.keys(hash2).length;
};

// 21. Merge Two Sorted Lists - https://leetcode.com/problems/merge-two-sorted-lists/
var mergeTwoLists = function (list1, list2) {
  function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  let head = new ListNode();
  let tail = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  tail.next = list1 || list2;

  return head.next;
};

// 268. Missing Number - https://leetcode.com/problems/missing-number/
var missingNumber = function (nums) {
  const n = nums.length;
  const fullSum = n * (n + 1) / 2;
  const actualSum = nums.reduce((total, acc) => total + acc);

  return fullSum - actualSum;
};

// 448. Find All Numbers Disappeared in an Array - https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
var findDisappearedNumbers = function (nums) {
  const hash = new Set();
  const missing = [];

  for (let i = 0; i < nums.length; i++) {
    hash.add(nums[i]);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!hash.has(i)) {
      missing.push(i);
    }
  }
  return missing;
};

// 136. Single Number - https://leetcode.com/problems/single-number/
// XOR operations leaves oddball value within array
var singleNumber = function (nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
};

// 338. Counting Bits - https://leetcode.com/problems/counting-bits/
// - Video: https://www.youtube.com/watch?v=RyBM56RIWrM
var countBits = function (n) {
  // const result = [];

  // for (let i = 0; i <= n; i++) {
  //   let binary = (i).toString(2);
  //   let onesCount = binary.split('1').length - 1;
  //   result.push(onesCount);
  // }

  // return result;
  let dp = new Array(n + 1).fill(0, 0, (n + 1));
  let offset = 1;

  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) {
      offset = i;
    }
    dp[i] = 1 + dp[i - offset]
  }
  return dp;
}

// 141. Linked List Cycle - https://leetcode.com/problems/linked-list-cycle/
var hasCycle = function(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;
};

// 876. Middle of the Linked List - https://leetcode.com/problems/middle-of-the-linked-list/
var middleNode = function(head) {
  // Slow and fast pointers. Terminate when !fast || !fast.next
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next || null;
    slow = slow.next || null;
  }
  return slow;
}