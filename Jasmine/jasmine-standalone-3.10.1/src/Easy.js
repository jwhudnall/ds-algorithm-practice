// LeetCode Problem Solutions - Difficulty: Easy

// Two Sum - https://leetcode.com/problems/two-sum/
// Notes: Solution uses a hash map to reduce complexity to N.
var twoSum = function(nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    const need = target - val;
    if (hash.hasOwnProperty(need)) {
      return [ hash[need], i ];
    }
    hash[val] = i;
  }
  return [];
};

// Valid Parentheses - https://leetcode.com/problems/valid-parentheses/
var isValid = function(s) {
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
    } else if(bracketPairs.get(char) === stackTop && stack.length !== 0) {
     stack.pop();
   } else {
     return false;
   }
  }

  return stack.length === 0;
};

var romanToInt = function(s) {
  const values = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
  };
  let total = 0;
  let i = 0;

  while (i < s.length) {
    let current = s[i];
    let next = s[i + 1];

    if (current === 'I' && (next === 'V' || next === 'X')) {
      total += values[next] - values[current];
      i += 2;
    }
    else if (current === 'X' && (next === 'L' || next === 'C')) {
      total += values[next] - values[current];
      i += 2;
    }
    else if (current === 'C' && (next === 'D' || next === 'M')) {
      total += values[next] - values[current];
      i += 2;
    } else {
      total += values[current];
      i += 1;
    }
  }
  return total;
};