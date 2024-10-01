/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
  const remainder_map = new Map();
  arr.forEach((v) => {
    let rem = v % k;
    if (rem < 0) {
      rem = rem + k;
    }
    remainder_map.set(rem, (remainder_map.get(rem) || 0) + 1);
  });
  return Array.from(remainder_map.entries()).every(([rem, count]) => {
    if (rem === 0) {
      return count % 2 === 0;
    }
    const comp = k - rem;
    return remainder_map.get(comp) === count;
  });
};
