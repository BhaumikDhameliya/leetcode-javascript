/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  const row = grid.length;
  const col = grid[0]?.length;
  let res = 0;

  function isMagicSquare(si, sj) {
    const arr = [];
    for (let i = si; i < si + 3; i++) {
      for (let j = sj; j < sj + 3; j++) {
        let e = grid[i][j];
        if (e > 9 || e === 0) {
          return false;
        }
        arr.push(e);
      }
    }
    if (new Set(arr).size !== 9) return false;

    const sum = arr[0] + arr[1] + arr[2];
    if (
      sum !== arr[3] + arr[4] + arr[5] ||
      sum !== arr[6] + arr[7] + arr[8] ||
      sum !== arr[0] + arr[3] + arr[6] ||
      sum !== arr[1] + arr[4] + arr[7] ||
      sum !== arr[2] + arr[5] + arr[8] ||
      sum !== arr[0] + arr[4] + arr[8] ||
      sum !== arr[2] + arr[4] + arr[6]
    ) {
      return false;
    }
    return true;
  }

  for (let i = 0; i < row - 2; i++) {
    for (let j = 0; j < col - 2; j++) {
      if (isMagicSquare(i, j)) {
        res++;
      }
    }
  }
  return res;
};
