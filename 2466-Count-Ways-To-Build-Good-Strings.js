/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
  const dp = new Map();
  const mod = 10 ** 9 + 7;

  function dfs(length) {
    if (length > high) {
      return 0;
    }
    if (dp.has(length)) {
      return dp.get(length);
    }
    let res;
    res = length >= low ? 1 : 0;
    res += dfs(length + zero) + dfs(length + one);
    dp.set(length, res % mod);
    return res % mod;
  }

  return dfs(0);
};
