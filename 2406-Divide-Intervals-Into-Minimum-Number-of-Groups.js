/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function (intervals) {
  const start = [];
  const end = [];
  for (const [l, r] of intervals) {
    start.push(l);
    end.push(r);
  }
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let res = 0;
  while (i < intervals.length) {
    if (start[i] <= end[j]) {
      i += 1;
    } else {
      j += 1;
    }
    res = Math.max(res, i - j);
  }
  return res;
};
