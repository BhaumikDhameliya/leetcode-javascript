/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  const xor_arr = [0];
  arr.forEach((e, i) => (xor_arr[i + 1] = xor_arr[i] ^ e));
  return queries.map(([l, r]) => xor_arr[l] ^ xor_arr[r + 1]);
};
