/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const res = [];
  function dfs(cur) {
    if (cur > n) return;
    res.push(cur);
    cur *= 10;
    for (let i = 0; i < 10; i++) {
      dfs(cur + i);
    }
  }
  for (let i = 1; i < 10; i++) {
    dfs(i);
  }
  return res;
};
