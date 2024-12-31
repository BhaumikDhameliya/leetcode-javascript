/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const c = {
    1: costs[0],
    7: costs[1],
    30: costs[2],
  };

  const dp = new Array(days.length + 1).fill(0); // Initialize dp array with 0

  for (let i = days.length - 1; i >= 0; i--) {
    dp[i] = Infinity;
    Object.entries(c).forEach(([duration, cost]) => {
      let j = i;
      while (j < days.length && days[j] < days[i] + Number(duration)) {
        j++;
      }
      dp[i] = Math.min(dp[i], cost + dp[j]);
    });
  }

  return dp[0];
};
