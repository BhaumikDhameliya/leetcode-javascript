/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  const ROWS = points.length;
  const COLS = points[0].length;
  let row = points[0];

  for (let r = 1; r < ROWS; r++) {
    const next_row = [...points[r]];
    const left = new Array(COLS).fill(0);
    const right = new Array(COLS).fill(0);
    left[0] = row[0];

    for (let c = 1; c < COLS; c++) {
      left[c] = Math.max(row[c], left[c - 1] - 1);
    }

    right[COLS - 1] = row[COLS - 1];
    for (let c = COLS - 2; c >= 0; c--) {
      right[c] = Math.max(row[c], right[c + 1] - 1);
    }

    for (let c = 0; c < COLS; c++) {
      next_row[c] += Math.max(left[c], right[c]);
    }
    row = next_row;
  }
  return Math.max(...row);
};
