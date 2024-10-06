/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  let s1 = sentence1.split(" ");
  let s2 = sentence2.split(" ");

  if (s2.length < s1.length) {
    [s1, s2] = [s2, s1]; // Ensure s1 is the shorter or equal-length sentence
  }

  // s1 should be a prefix, suffix, or combination of both
  let l1 = 0;
  while (l1 < s1.length && s1[l1] === s2[l1]) {
    l1++;
  }

  let r1 = s1.length - 1,
    r2 = s2.length - 1;
  while (r1 >= l1 && r2 >= 0 && s1[r1] === s2[r2]) {
    r1--;
    r2--;
  }

  return l1 > r1;
};
