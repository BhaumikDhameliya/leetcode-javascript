/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let size = 0;
  let res = 0;
  let cur_max = 0;
  nums.forEach((n) => {
    if (n > cur_max) {
      cur_max = n;
      size = 1;
      res = 0;
    } else if (n === cur_max) {
      size += 1;
    } else {
      size = 0;
    }
    res = Math.max(res, size);
  });
  return res;
};
