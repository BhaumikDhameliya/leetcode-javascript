/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  const map = new Map();
  word.split("").forEach((c) => {
    map.set(c, (map.get(c) ?? 0) + 1);
  });
  let res = 0;
  Array.from(map.values())
    .sort((a, b) => b - a)
    .forEach((v, i) => {
      res += v * (Math.floor(i / 8) + 1);
    });
  return res;
};

console.log(minimumPushes("abcde")); // 5
console.log(minimumPushes("xyzxyzxyzxyz")); // 12
console.log(minimumPushes("aabbccddeeffgghhiiiiii")); // 24
