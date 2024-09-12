/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  const set = new Set(allowed.split(""));
  let res = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      const c = word.at(j);
      if (!set.has(c)) break;
      if (j === word.length - 1) res++;
    }
  }
  return res;
};
