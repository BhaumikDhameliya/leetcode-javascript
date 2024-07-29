/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  let res = 0;
  for (let m = 0; m < rating.length; m++) {
    let left_smaller = 0;
    let right_larger = 0;
    for (let i = 0; i < m; i++) {
      if (rating[i] < rating[m]) {
        left_smaller += 1;
      }
    }
    for (let i = m + 1; i < rating.length; i++) {
      if (rating[i] > rating[m]) {
        right_larger += 1;
      }
    }
    // count ascend
    res += left_smaller * right_larger;

    const left_larger = m - left_smaller;
    const right_smaller = rating.length - m - 1 - right_larger;
    res += left_larger * right_smaller;
  }
  return res;
};
