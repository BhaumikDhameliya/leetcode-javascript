/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const map = new Map();
  for (let i = 0; i < s1.length; i++) {
    const ch = s1[i];
    map.set(ch, (map.get(ch) || 0) + 1);
  }
  for (let start = 0; start <= s2.length - s1.length; start++) {
    let matchCount = 0;
    let currMap = new Map(map);
    if (!map.get(s2[start])) {
      continue;
    }
    for (let i = start; i < start + s1.length; i++) {
      const ch = s2[i];
      if (currMap.get(ch)) {
        matchCount++;
        if (matchCount === s1.length) {
          return true;
        }
        currMap.set(ch, currMap.get(ch) - 1);
      } else {
        matchCount = 0;
        currMap = new Map(map);
      }
    }
  }
  return false;
};
