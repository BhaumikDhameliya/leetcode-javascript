/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
  const total = nums.reduce((acc, num) => acc + num, 0); // sum of the array
  const remain = total % p;

  if (remain === 0) {
    return 0;
  }

  let res = nums.length;
  let cur_sum = 0;
  // Map to store remainder of prefix sums to last index
  const remain_to_idx = { 0: -1 };

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    cur_sum = (cur_sum + n) % p;
    const prefix = (cur_sum - remain + p) % p;

    if (prefix in remain_to_idx) {
      const length = i - remain_to_idx[prefix];
      res = Math.min(res, length);
    }

    remain_to_idx[cur_sum] = i;
  }

  return res === nums.length ? -1 : res;
};
