/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  const res = new Set();
  const left = new Set();
  const right = new Map();
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    right.set(c, (right.get(c) || 0) + 1);
  }

  for (const m of s) {
    right.set(m, right.get(m) - 1);
    left.forEach((c) => {
      if (right.get(c) > 0) {
        res.add(`${m}${c}`);
      }
    });
    left.add(m);
  }
  return res.size;
};
