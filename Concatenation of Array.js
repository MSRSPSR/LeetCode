/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let ans = [];
  let n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[i];
  }

  return ans;
};
