/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  num = num.toString().split("");
  let max_digit = "0";
  let max_i = -1;
  let swap_i = -1;
  let swap_j = -1;
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] > max_digit) {
      max_digit = num[i];
      max_i = i;
    }
    if (num[i] < max_digit) {
      swap_i = i;
      swap_j = max_i;
    }
  }
  let temp = num[swap_i];
  num[swap_i] = num[swap_j];
  num[swap_j] = temp;
  return parseInt(num.join(""));
};
