/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {
  function mappedNumber(n) {
    if (n === 0) {
      return mapping[n];
    }
    let mapped_n = 0;
    let base = 1;
    while (n > 0) {
      const digit = n % 10;
      n = Math.floor(n / 10);
      mapped_n += base * mapping[digit];
      base *= 10;
    }
    return mapped_n;
  }
  return nums.sort((a, b) => {
    return mappedNumber(a) - mappedNumber(b);
  });
};

console.log(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38])); // [338,38,991]
console.log(sortJumbled([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [789, 456, 123])); // [123,456,789]
