/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
// var canBeEqual = function (target, arr) {
//   target.sort();
//   arr.sort();
//   for (let i = 0; i < arr.length; i++) {
//     if (target[i] !== arr[i]) return false;
//   }
//   return true;
// };

var canBeEqual = function (target, arr) {
  const map = new Map();
  for (let i = 0; i < target.length; i++) {
    map.set(target[i], (map.get(target[i]) ?? 0) + 1);
    map.set(arr[i], (map.get(arr[i]) ?? 0) - 1);
  }
  return Array.from(map.values()).every((v) => v === 0);
};

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])); // true
console.log(canBeEqual([7], [7])); // true
console.log(canBeEqual([3, 7, 9], [3, 7, 11])); // false
