/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  const sum = chalk.reduce((a, b) => a + b, 0);
  k = k % sum;
  for (let i = 0; i < chalk.length; i++) {
    if (k < chalk[i]) {
      return i;
    }
    k -= chalk[i];
  }
};
