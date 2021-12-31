// LeetCode Problem Solutions - Difficulty: Medium

// 238. Product of Array Except Self - https://leetcode.com/problems/product-of-array-except-self/
var productExceptSelf = function (nums) {
  let result = [];
  let prefix = 1;
  let postfix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix = prefix * parseInt(nums[i]);
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = parseInt(result[i] * postfix);
    postfix = postfix * parseInt(nums[i]);
  }

  return result;
};