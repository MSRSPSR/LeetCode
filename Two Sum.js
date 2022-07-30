/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let lhs = 0;
    let rhs = nums.length - 1;
    let unsorted = [...nums];

    nums.sort((a, b) => a - b);
    while (lhs < nums.length) {
        let count = nums[lhs] + nums[rhs]
        if (count < target) {
            lhs++;
        } else if (count > target) {
            rhs--;
        } else {
          return[unsorted.indexOf(nums[lhs]),
          	unsorted.lastIndexOf(nums[rhs])];
        }
    }
};
