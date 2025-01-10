/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  const count2 = {};

  for (const w of words2) {
    const countW = {};
    for (const char of w) {
      countW[char] = (countW[char] || 0) + 1;
    }
    for (const [char, cnt] of Object.entries(countW)) {
      count2[char] = Math.max(count2[char] || 0, cnt);
    }
  }

  const res = [];
  for (const w of words1) {
    const countW = {};
    for (const char of w) {
      countW[char] = (countW[char] || 0) + 1;
    }
    let isValid = true;
    for (const [char, cnt] of Object.entries(count2)) {
      if ((countW[char] || 0) < cnt) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      res.push(w);
    }
  }
  return res;
};
