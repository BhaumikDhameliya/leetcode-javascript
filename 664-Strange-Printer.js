/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {
  const dp = new Map();
  function solve(i, j) {
    const key = JSON.stringify([i, j]);
    if (i === j) return 1;
    if (dp.has(key)) return dp.get(key);
    let minTurns = Infinity;
    for (let k = i; k < j; k++) {
      minTurns = Math.min(minTurns, solve(i, k) + solve(k + 1, j));
    }
    const res = s[i] === s[j] ? minTurns - 1 : minTurns;
    dp.set(key, res);
    return res;
  }
  return solve(0, s.length - 1);
};
