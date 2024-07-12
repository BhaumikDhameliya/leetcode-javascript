// let s = "(abcd)";
// let s = "(u(love)i)";
// let s = "(ed(et(oc))el)";
// let s = "((abc)def)";
let s = "a(bcdefghijkl(mno)p)q";

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  let i = s.length - 1;
  let ch = s.charAt(i);
  function sub() {
    let result = "";
    while (ch !== "(" && i >= 0) {
      // console.log("i", i, ch);
      // if (i < 0) {
      //   return result;
      // }
      if (ch === ")") {
        i--;
        ch = s.charAt(i);
        let res = sub();
        result += res;
      } else {
        result += ch;
        i--;
        ch = s.charAt(i);
      }
    }
    i--;
    ch = s.charAt(i);
    return result.split("").reverse().join("");
  }
  return sub();
};

console.log(reverseParentheses(s));
