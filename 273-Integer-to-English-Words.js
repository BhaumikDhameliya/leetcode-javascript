/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  if (num === 0) {
    return "Zero";
  }

  const ones_map = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
  };

  const tens_map = {
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety",
  };

  function get_string(n) {
    let res = [];
    const hundreds = Math.floor(n / 100);
    if (hundreds) {
      res.push(ones_map[hundreds] + " Hundred");
    }
    const last_2 = n % 100;
    if (last_2 >= 20) {
      const tens = Math.floor(last_2 / 10);
      res.push(tens_map[tens * 10]);
      const ones = n % 10;
      if (ones) {
        res.push(ones_map[ones]);
      }
    } else if (last_2) {
      res.push(ones_map[last_2]);
    }
    return res.join(" ");
  }

  const postfix = ["", " Thousand", " Million", " Billion"];
  let i = 0;
  let res = [];
  while (num) {
    digits = num % 1000;
    s = get_string(digits);
    if (s) {
      res.push(s + postfix[i]);
    }
    num = Math.floor(num / 1000);
    i += 1;
  }
  return res.reverse().join(" ");
};
