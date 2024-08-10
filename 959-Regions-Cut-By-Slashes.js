/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const ROWS2 = ROWS * 3;
  const COLS2 = COLS * 3;
  const grid2 = [];

  for (let r = 0; r < ROWS2; r++) {
    grid2.push(Array(COLS2).fill(0));
  }

  for (let r = 0; r < ROWS; r++) {
    const r2 = r * 3;
    for (let c = 0; c < COLS; c++) {
      const c2 = c * 3;
      if (grid[r][c] === "/") {
        grid2[r2][c2 + 2] = 1;
        grid2[r2 + 1][c2 + 1] = 1;
        grid2[r2 + 2][c2] = 1;
      } else if (grid[r][c] === "\\") {
        grid2[r2][c2] = 1;
        grid2[r2 + 1][c2 + 1] = 1;
        grid2[r2 + 2][c2 + 2] = 1;
      }
    }
  }

  function dfs(r, c, visit) {
    const e = JSON.stringify([r, c]);
    if (
      r < 0 ||
      c < 0 ||
      r === ROWS2 ||
      c == COLS2 ||
      grid2[r][c] !== 0 ||
      visit.has(e)
    )
      return;
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

  visit = new Set();
  let res = 0;
  for (let r = 0; r < ROWS2; r++) {
    for (let c = 0; c < COLS2; c++) {
      const e = JSON.stringify([r, c]);
      if (grid2[r][c] === 0 && !visit.has(e)) {
        dfs(r, c, visit);
        res += 1;
      }
    }
  }
  return res;
};

console.log(regionsBySlashes([" /", "/ "])); // 2
console.log(regionsBySlashes([" /", "  "])); // 1
console.log(regionsBySlashes(["/\\", "\\/"])); // 5
