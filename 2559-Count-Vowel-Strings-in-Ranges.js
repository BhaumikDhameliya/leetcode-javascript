/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  const vowel_set = new Set(["a", "e", "i", "o", "u"]);
  const prefix_count = [0];

  words.forEach((word, i) => {
    if (vowel_set.has(word[0]) && vowel_set.has(word[word.length - 1])) {
      prefix_count.push(prefix_count[i] + 1);
    } else {
      prefix_count.push(prefix_count[i]);
    }
  });

  const res = queries.map(([l, r]) => {
    return prefix_count[r + 1] - prefix_count[l];
  });
  return res;
};
