// LeetCode Problem Solutions - Difficulty: Easy

// Two Sum - https://leetcode.com/problems/two-sum/
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