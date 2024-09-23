/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
  const words = new Set(dictionary);
  const dp = new Map([[s.length, 0]]);
  function dfs(i) {
    if (dp.has(i)) {
      return dp.get(i);
    }
    let res = 1 + dfs(i + 1); // skip curr char
    for (let j = i; j < s.length; j++) {
      if (words.has(s.slice(i, j + 1))) {
        res = Math.min(res, dfs(j + 1));
      }
    }
    dp.set(i, res);
    return res;
  }
  return dfs(0);
};
