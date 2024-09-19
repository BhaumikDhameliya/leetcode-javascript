const operations = {
  "+": function (x, y) {
    return x + y;
  },
  "-": function (x, y) {
    return x - y;
  },
  "*": function (x, y) {
    return x * y;
  },
};

/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  const res = [];
  for (let i = 0; i < expression.length; i++) {
    const op = expression[i];
    if (operations[op]) {
      const num1 = diffWaysToCompute(expression.slice(0, i));
      const num2 = diffWaysToCompute(expression.slice(i + 1));

      num1.forEach((n1) => {
        num2.forEach((n2) => {
          res.push(operations[op](n1, n2));
        });
      });
    }
  }
  if (res.length === 0) {
    res.push(parseInt(expression));
  }
  return res;
};
