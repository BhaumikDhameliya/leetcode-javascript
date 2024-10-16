/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function (s) {
  const s_arr = s.split("");
  let res = 0;
  let zero_count = 0;
  for (let i = 0; i < s_arr.length; i++) {
    if (s_arr[i] === "0") zero_count++;
  }
  for (let i = 0; i < zero_count; i++) {
    if (s_arr[i] === "1") {
      for (let j = zero_count; j < s_arr.length; j++) {
        if (s_arr[j] === "0") {
          res += j - i;
          s_arr[j] = "1";
          s_arr[i] = "0";
          zero_count = j; // starting point after swap
          break;
        }
      }
    }
  }
  return res;
};

var minimumSteps2 = function (s) {
  let l = 0;
  let res = 0;
  for (let r = 0; r < s.length; r++) {
    if (s[r] === "0") {
      res += r - l;
      l += 1;
    }
  }
  return res;
};
