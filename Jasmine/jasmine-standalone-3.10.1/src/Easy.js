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