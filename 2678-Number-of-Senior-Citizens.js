/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  return details.reduce(
    (acc, d) => (Number(d.slice(11, 13)) > 60 ? acc + 1 : acc),
    0
  );
};
