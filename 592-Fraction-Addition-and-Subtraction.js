/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }
  let nume = 0;
  let deno = 1;
  let cur_nume = 0;
  let cur_deno = 0;
  let is_negative = false;
  let is_nume = true;
  for (let i = 0; i < expression.length; i++) {
    let ch = expression.charAt(i);
    if (ch === "-") {
      is_negative = true;
      continue;
    }
    if (is_nume) {
      while (ch !== "/") {
        cur_nume = cur_nume * 10 + parseInt(ch);
        i++;
        ch = expression.charAt(i);
      }
      is_nume = false;
    } else {
      while (ch !== "+" && ch !== "-" && i < expression.length) {
        cur_deno = cur_deno * 10 + parseInt(ch);
        i++;
        ch = expression.charAt(i);
      }
      is_nume = true;
      nume = is_negative
        ? nume * cur_deno - deno * cur_nume
        : (nume = nume * cur_deno + deno * cur_nume);
      deno *= cur_deno;

      cur_nume = 0;
      cur_deno = 0;

      if (ch === "-") {
        is_negative = true;
      } else {
        is_negative = false;
      }
    }
  }
  const g = Math.abs(gcd(nume, deno));
  nume /= g;
  deno /= g;
  return nume + "/" + deno;
};

// console.log(fractionAddition("-1/2+1/2")); // "0/1"
// console.log(fractionAddition("-1/2+1/2+1/3")); // "1/3"
// console.log(fractionAddition("1/3-1/2")); // "-1/6"
console.log(fractionAddition("11/3-10/2")); // "-4/3"
