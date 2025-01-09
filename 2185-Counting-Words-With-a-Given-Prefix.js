/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  return words.reduce((acc, word) => {
    if (word.startsWith(pref)) {
      return acc + 1;
    }
    return acc;
  }, 0);
};
