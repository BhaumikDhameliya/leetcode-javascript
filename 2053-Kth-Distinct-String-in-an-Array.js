/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  for (let i = 0; i < arr.length; i++) {
    let is_distict = true;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[i] === arr[j]) {
        is_distict = false;
        break;
      }
    }
    if (is_distict) {
      k--;
      if (k === 0) {
        return arr[i];
      }
    }
  }
  return "";
};
