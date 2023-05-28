/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  const res = {};
  this.forEach((i) => {
    const r = fn(i);
    if (res[r]) {
      res[r].push(i);
    } else {
      res[r] = [i];
    }
  });
  return res;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
