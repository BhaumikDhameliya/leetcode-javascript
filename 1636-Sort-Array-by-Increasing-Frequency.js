/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const count = new Map();
  nums.forEach((n) => {
    count.set(n, (count.get(n) ?? 0) + 1);
  });
  const array_with_count = Array.from(count.entries());
  array_with_count.sort(([va, ca], [vb, cb]) => {
    if (ca === cb) return vb - va;
    return ca - cb;
  });
  let res = [];
  array_with_count.forEach(([v, c]) => {
    for (let i = 0; i < c; i++) {
      res.push(v);
    }
  });
  return res;
};
