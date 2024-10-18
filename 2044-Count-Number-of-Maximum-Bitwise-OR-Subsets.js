/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  let max_or = 0;
  for (const n of nums) {
    max_or |= n;
  }
  function dfs(i, cur_or) {
    if (i === nums.length) {
      return cur_or === max_or ? 1 : 0;
    }
    return dfs(i + 1, cur_or) + dfs(i + 1, cur_or | nums[i]);
  }
  return dfs(0, 0);
};
