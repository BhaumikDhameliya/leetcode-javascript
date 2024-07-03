/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
    if (nums.length <= 4) return 0;
    let res = Infinity;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < 4; i++) {
        let j = nums.length - 4 + i;
        res = Math.min(res, nums[j] - nums[i])
    }
    return res;
};