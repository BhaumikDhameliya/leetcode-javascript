/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  let prefix = 0;
  let suffix = 0;
  const base = 29;
  let lastIndex = 0; // equivalent to -1 in Python code
  let power = 1;
  const mod = 10 ** 9 + 7;

  // Traverse the string and calculate prefix and suffix hash values
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i) - "a".charCodeAt(0) + 1;

    prefix = (prefix * base) % mod;
    prefix = (prefix + char) % mod;
    suffix = (suffix + char * power) % mod;
    power = (power * base) % mod;

    // Check if prefix hash matches suffix hash
    if (prefix === suffix) {
      lastIndex = i;
    }
  }

  // Extract the suffix from the unmatched part
  const remainingSuffix = s.slice(lastIndex + 1);

  // Reverse the unmatched suffix and concatenate with the original string
  return remainingSuffix.split("").reverse().join("") + s;
};
