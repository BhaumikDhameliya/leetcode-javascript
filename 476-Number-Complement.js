/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num, p = 0) {
  if (num == 0) {
    return 0;
  } else {
    const n = Math.abs((num % 2) - 1);
    return n * 2 ** p + findComplement(parseInt(num / 2), p + 1);
  }
};
