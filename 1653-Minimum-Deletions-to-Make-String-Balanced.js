/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  let res = s.length;
  let a_count_right = 0;
  let b_count_left = 0;
  let s_array = s.split("");

  // count the number of a in the right
  s_array.forEach((c) => {
    if (c === "a") {
      a_count_right++;
    }
  });
  s_array.forEach((c) => {
    if (c === "a") {
      a_count_right--;
    }
    res = Math.min(res, a_count_right + b_count_left);
    if (c === "b") {
      b_count_left++;
    }
  });

  return res;
};

console.log(minimumDeletions("aababbab")); // 2
console.log(minimumDeletions("bbaaaaabb")); // 2
console.log(minimumDeletions("bbabbaa")); // 3
