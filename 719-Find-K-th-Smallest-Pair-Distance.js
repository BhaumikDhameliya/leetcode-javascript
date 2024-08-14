/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  nums.sort((a, b) => a - b);

  function helper(dist) {
    // Count total num of pairs
    // with diff <= dist
    let l = 0;
    let res = 0;
    for (let r = 0; r < nums.length; r++) {
      while (nums[r] - nums[l] > dist) {
        l += 1;
      }
      res += r - l;
    }
    return res;
  }

  let l = 0;
  let r = nums[nums.length - 1];
  while (l < r) {
    const m = l + Math.floor((r - l) / 2);
    const pairs = helper(m);
    if (pairs >= k) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return r;
};
