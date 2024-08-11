/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function (grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  function dfs(r, c, visit) {
    const e = JSON.stringify([r, c]);
    if (
      r < 0 ||
      c < 0 ||
      r === ROWS ||
      c === COLS ||
      grid[r][c] === 0 ||
      visit.has(e)
    ) {
      return;
    }
    visit.add(e);
    const neighbors = [
      [r + 1, c],
      [r, c + 1],
      [r - 1, c],
      [r, c - 1],
    ];
    neighbors.forEach(([nr, nc]) => {
      dfs(nr, nc, visit);
    });
  }

  function count_islands() {
    const visit = new Set();
    let count = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const e = JSON.stringify([r, c]);
        if (grid[r][c] && !visit.has(e)) {
          dfs(r, c, visit);
          count++;
        }
      }
    }
    return count;
  }

  if (count_islands() !== 1) {
    return 0;
  }
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === 0) {
        continue;
      }
      grid[r][c] = 0;
      if (count_islands() !== 1) {
        return 1;
      }
      grid[r][c] = 1;
    }
  }
  return 2;
};
