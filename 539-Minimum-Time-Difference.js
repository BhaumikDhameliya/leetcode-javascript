/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  function timeToMin(time) {
    const [h, m] = time.split(":");
    return parseInt(h) * 60 + parseInt(m);
  }
  const exists = new Array(24 * 60);
  let first_m = 60 * 24;
  let last_m = 0;
  for (let i = 0; i < timePoints.length; i++) {
    const m = timeToMin(timePoints[i]);
    if (exists[m]) return 0;
    exists[m] = true;
    first_m = Math.min(first_m, m);
    last_m = Math.max(last_m, m);
  }
  let res = 60 * 24 - last_m + first_m;
  let prev_m = first_m;
  for (let m = first_m + 1; m < exists.length; m++) {
    if (exists[m]) {
      const diff = m - prev_m;
      res = Math.min(res, diff);
      prev_m = m;
    }
  }
  return res;
};
