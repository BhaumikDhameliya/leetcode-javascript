/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  const vowels = "aeiou";
  let res = 0;
  let mask = 0;
  const maskToIdx = { 0: -1 };

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (vowels.includes(c)) {
      mask ^= 1 << vowels.indexOf(c);
    }
    if (mask in maskToIdx) {
      const length = i - maskToIdx[mask];
      res = Math.max(res, length);
    } else {
      maskToIdx[mask] = i;
    }
  }
  return res;
};
