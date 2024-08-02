/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
  const N = nums.length;
  const total_ones = nums.reduce((acc, n) => acc + n, 0);
  // console.log("total_ones", total_ones);
  let l = 0;
  let window_ones = 0;
  let max_window_ones = 0;
  for (let r = 0; r < N * 2; r++) {
    window_ones += nums[r % N];
    if (r - l + 1 > total_ones) {
      window_ones -= nums[l % N];
      l++;
    }
    max_window_ones = Math.max(max_window_ones, window_ones);
  }
  return total_ones - max_window_ones;
};
