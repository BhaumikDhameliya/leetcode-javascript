/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (original.length !== m * n) return [];
  const res = [];
  for (let c = 0; c < m; c++) {
    let row = [];
    for (let i = c * n; i < (c + 1) * n; i++) {
      row.push(original[i]);
    }
    res.push(row);
  }
  return res;
};
