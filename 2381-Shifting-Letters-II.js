/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  let prefix_diff = new Array(s.length + 1).fill(0);

  for (let i = 0; i < shifts.length; i++) {
    const [left, right, d] = shifts[i];
    prefix_diff[right + 1] += d ? 1 : -1;
    prefix_diff[left] += d ? -1 : 1;
  }

  let diff = 0;
  let res = s.split("").map((c) => c.charCodeAt(0) - "a".charCodeAt(0));

  for (let i = prefix_diff.length - 1; i > 0; i--) {
    diff = (diff + prefix_diff[i] + 26) % 26;
    res[i - 1] = (diff + res[i - 1] + 26) % 26;
  }

  const str = res.map((n) => String.fromCharCode(n + "a".charCodeAt(0)));
  return str.join("");
};
