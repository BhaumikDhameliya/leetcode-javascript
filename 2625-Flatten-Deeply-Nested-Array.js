/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  const res = [];
  arr.forEach((element) => {
    if (!Array.isArray(element) || n === 0) {
      res.push(element);
    } else {
      res.push(...flat(element, n - 1));
    }
  });
  return res;
};
