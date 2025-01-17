/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function (derived) {
  let first = 0;
  let last = 0;
  for (let i = 0; i < derived.length; i++) {
    if (derived[i]) {
      last = ~last;
    }
  }
  return first === last;
};
