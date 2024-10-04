/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
  const total = skill.reduce((acc, num) => acc + num, 0); // sum of the skill array
  if ((2 * total) % skill.length !== 0) {
    return -1;
  }

  const count = {}; // Map to store counts of each skill level
  const target = (2 * total) / skill.length;
  let res = 0;

  // Populate the count map
  for (let s of skill) {
    if (!count[s]) count[s] = 0;
    count[s]++;
  }
  for (let s of skill) {
    if (!count[s]) continue; // If skill already used, skip it
    count[s]--;
    const diff = target - s;
    if (!count[diff]) {
      return -1; // If matching pair not found, return -1
    }
    res += s * diff;
    count[diff]--;
  }
  return res;
};
