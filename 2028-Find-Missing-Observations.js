/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  const m = rolls.length;
  const sum = mean * (m + n);
  const m_sum = rolls.reduce((a, b) => a + b, 0);
  let n_sum = sum - m_sum;
  if (n_sum < n || n_sum > 6 * n) return [];
  const res = [];
  while (n > 0) {
    const val = Math.floor(n_sum / n);
    n--;
    n_sum -= val;
    res.push(val);
  }
  return res;
};
