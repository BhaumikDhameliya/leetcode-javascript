/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  const dp = new Array(n + 1).fill(1000);
  dp[1] = 0;
  for (let i = 2; i < n + 1; i++) {
    for (let j = 1; j < 1 + Math.floor(i / 2); j++) {
      if (i % j === 0) {
        dp[i] = Math.min(dp[i], dp[j] + Math.floor(i / j));
      }
    }
  }
  return dp[n];
};
