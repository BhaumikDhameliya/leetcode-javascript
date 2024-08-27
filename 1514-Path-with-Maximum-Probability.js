/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start_node, end_node) {
  const maxProb = [];
  maxProb[start_node] = 1;
  while (true) {
    let updated = false;
    edges.forEach(([u, v], i) => {
      if ((maxProb[v] || 0) * succProb[i] > (maxProb[u] || 0)) {
        maxProb[u] = (maxProb[v] || 0) * succProb[i];
        updated = true;
      }
      if ((maxProb[u] || 0) * succProb[i] > (maxProb[v] || 0)) {
        maxProb[v] = (maxProb[u] || 0) * succProb[i];
        updated = true;
      }
    });
    if (!updated) break;
  }
  console.log(maxProb);
  return maxProb[end_node] || 0;
};
