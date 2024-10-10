/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
  const maxRight = new Array(nums.length);
  let i = nums.length - 1;
  let prevMax = 0;

  // Filling maxRight array
  for (let n of nums.toReversed()) {
    maxRight[i] = Math.max(n, prevMax);
    prevMax = maxRight[i];
    i -= 1;
  }

  let res = 0;
  let l = 0;

  // Finding the maximum width ramp
  for (let r = 0; r < nums.length; r++) {
    while (nums[l] > maxRight[r]) {
      l += 1;
    }
    res = Math.max(res, r - l);
  }

  return res;
};
