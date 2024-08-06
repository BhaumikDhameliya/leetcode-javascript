/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  const MOD = 1000000007;
  const sub_array_sums = [];
  for (let i = 0; i < n; i++) {
    let int_sum = 0;
    for (let j = i; j < n; j++) {
      int_sum = (int_sum + nums[j]) % MOD;
      sub_array_sums.push(int_sum);
    }
  }
  sub_array_sums.sort((a, b) => a - b);
  let res = 0;
  for (let i = left - 1; i < right; i++) {
    res += sub_array_sums[i];
  }
  return res % MOD;
};

console.log(rangeSum([1, 2, 3, 4], 4, 1, 5)); // 13
console.log(rangeSum([1, 2, 3, 4], 4, 3, 4)); // 6
console.log(rangeSum([1, 2, 3, 4], 4, 1, 10)); // 50
