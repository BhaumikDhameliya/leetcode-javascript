/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
  if (arr1.length > arr2.length) {
    const temp = arr2;
    arr2 = arr1;
    arr1 = temp;
  }
  const prefix_set = new Set();
  arr1.forEach((n) => {
    while (n && !prefix_set.has(n)) {
      prefix_set.add(n);
      n = Math.floor(n / 10);
    }
  });
  let res = 0;
  arr2.forEach((n) => {
    while (n && !prefix_set.has(n)) {
      n = Math.floor(n / 10);
    }
    if (n) {
      res = Math.max(res, String(n).length);
    }
  });
  return res;
};
