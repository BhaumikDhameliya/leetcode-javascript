/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  let res = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      const w1 = words[i];
      const w2 = words[j];
      const l = w1.length;
      if (w1 === w2.slice(0, l) && w1 === w2.slice(-l)) {
        res += 1;
      }
    }
  }
  return res;
};
