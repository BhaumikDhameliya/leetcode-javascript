/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let one_count = 0;
  let zero_count = 0;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "1") {
      one_count++;
    }
  }
  for (let i = 0; i < s.length - 1; i++) {
    if (s.charAt(i) === "1") {
      one_count--;
    } else {
      zero_count++;
    }
    res = Math.max(res, one_count + zero_count);
  }
  return res;
};
