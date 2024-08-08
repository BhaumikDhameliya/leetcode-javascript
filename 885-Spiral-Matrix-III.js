/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  const res = [];
  let total_moves = 1;
  let move_count = 0;
  let direction_index = 0;
  let change_move_index = 0;
  while (res.length < rows * cols) {
    console.log(rStart, cStart);
    if (0 <= rStart && rStart < rows && 0 <= cStart && cStart < cols) {
      res.push([rStart, cStart]);
    }
    switch (direction_index) {
      // right
      case 0:
        cStart++;
        break;

      // down
      case 1:
        rStart++;
        break;

      // left
      case 2:
        cStart--;
        break;

      // up
      case 3:
        rStart--;
        break;
    }
    move_count += 1;
    if (move_count === total_moves) {
      direction_index = Math.floor((direction_index + 1) % 4);
      change_move_index++;
      if (change_move_index % 2 === 0) {
        total_moves++;
      }
      move_count = 0;
    }
  }
  return res;
};

console.log(spiralMatrixIII(1, 4, 0, 0));
console.log(spiralMatrixIII(5, 6, 1, 4));
