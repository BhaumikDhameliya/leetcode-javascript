/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
  let right = nums.reduce((sum, n) => {
    return sum + n;
  }, 0);
  let left = 0;
  let res = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    left += nums[i];
    right -= nums[i];
    if (left >= right) {
      res++;
    }
  }
  return res;
};
