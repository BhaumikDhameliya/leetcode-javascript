/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  let cur = 1;
  let i = 1;
  function count(cur) {
    let res = 0;
    let nei = cur + 1;
    while (cur <= n) {
      res += Math.min(nei, n + 1) - cur;
      cur *= 10;
      nei *= 10;
    }
    return res;
  }
  while (i < k) {
    const steps = count(cur);
    if (i + steps <= k) {
      cur = cur + 1;
      i += steps;
    } else {
      cur *= 10;
      i += 1;
    }
  }
  return cur;
};
