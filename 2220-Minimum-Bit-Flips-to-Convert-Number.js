/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  let res = 0;
  let n = start ^ goal;
  while (n) {
    n = n & (n - 1);
    res++;
  }
  return res;
};
