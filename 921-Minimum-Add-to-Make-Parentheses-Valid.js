/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let res = 0;
  let open_cnt = 0;

  for (let c of s) {
    if (c === "(") {
      open_cnt += 1;
    } else {
      if (open_cnt === 0) {
        res += 1;
      }
      open_cnt = Math.max(open_cnt - 1, 0);
    }
  }
  return res + open_cnt;
};
