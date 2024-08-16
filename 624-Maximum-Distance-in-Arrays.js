/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  let min = arrays[0][0];
  let max = arrays[0].at(-1);
  let res = 0;
  for (let i = 1; i < arrays.length; i++) {
    const arr = arrays[i];
    res = Math.max(res, Math.max(arr.at(-1) - min, max - arr[0]));
    min = Math.min(min, arr[0]);
    max = Math.max(max, arr.at(-1));
  }
  return res;
};
