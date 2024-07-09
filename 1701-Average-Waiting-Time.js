/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
  let total = 0;
  let curTime = customers[0][0];
  customers.forEach(([a, t]) => {
    curTime = Math.max(curTime, a);
    total += t;
    if (curTime - a > 0) {
      total += curTime - a;
    }
    curTime += t;
  });
  return total / customers.length;
};
