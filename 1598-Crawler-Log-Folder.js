/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let res = 0;
  logs.forEach((l) => {
    switch (l) {
      case "../":
        if (res > 0) {
          res -= 1;
        }
        break;

      case "./":
        break;

      default:
        res += 1;
        break;
    }
  });
  return res;
};
