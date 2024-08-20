/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
  const dp = new Map();
  function dfs(alice, i, M) {
    if (i === piles.length) return 0;
    const key = JSON.stringify({ alice, i, M });
    if (dp.has(key)) return dp.get(key);

    let res = alice ? 0 : Infinity;
    let total = 0;
    for (let X = 1; X <= 2 * M; X++) {
      if (i + X > piles.length) break;
      total += piles[i + X - 1];
      if (alice) {
        res = Math.max(res, total + dfs(!alice, i + X, Math.max(M, X)));
      } else {
        res = Math.min(res, dfs(!alice, i + X, Math.max(M, X)));
      }
    }
    dp.set(key, res);
    return res;
  }
  return dfs(true, 0, 1);
};
