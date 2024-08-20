/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const nums = [1];
  let i2 = 0;
  let i3 = 0;
  let i5 = 0;
  for (let i = 1; i < n; i++) {
    let next_num = Math.min(nums[i2] * 2, nums[i3] * 3, nums[i5] * 5);
    nums.push(next_num);
    if (next_num === nums[i2] * 2) {
      i2 += 1;
    }
    if (next_num === nums[i3] * 3) {
      i3 += 1;
    }
    if (next_num === nums[i5] * 5) {
      i5 += 1;
    }
  }
  return nums[n - 1];
};
