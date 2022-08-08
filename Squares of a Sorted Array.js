/**
 * @param {number[]} nums
 * @return {number[]}
 */

const square = n => {
    return n ** 2;
}

var sortedSquares = function(nums) {
    return nums.map(square).sort((a, b) => { return a - b; })
};
