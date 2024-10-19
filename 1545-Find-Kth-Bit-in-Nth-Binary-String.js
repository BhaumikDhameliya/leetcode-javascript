/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
  let length = 2 ** n - 1;
  let invert = false;
  while (length > 1) {
    const half = Math.floor(length / 2);

    if (k <= half) {
      length = half;
    } else if (k > half + 1) {
      k = length - k + 1;
      length = half;
      invert = !invert;
    } else {
      return invert ? "0" : "1";
    }
  }
  return invert ? "1" : "0";
};
