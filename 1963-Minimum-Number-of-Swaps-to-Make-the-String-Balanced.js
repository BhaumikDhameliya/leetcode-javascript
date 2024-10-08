/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  const s_arr = s.split("");
  let swap_count = 0;
  let count = 0;
  let j = s_arr.length - 1;
  for (let i = 0; i < s_arr.length; i++) {
    if (s_arr[i] === "[") {
      count++;
    } else {
      if (count <= 0) {
        swap_count++;
        while (s_arr[j] !== "[") {
          j--;
        }
        count++;
      } else {
        count--;
      }
    }
  }
  return swap_count;
};
