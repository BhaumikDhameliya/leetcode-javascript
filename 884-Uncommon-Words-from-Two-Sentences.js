/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const res = [];
  const map = new Map();
  s1.split(" ").forEach((w) => map.set(w, (map.get(w) || 0) + 1));
  s2.split(" ").forEach((w) => map.set(w, (map.get(w) || 0) + 1));
  map.forEach((v, k) => {
    if (v === 1) res.push(k);
  });
  return res;
};
