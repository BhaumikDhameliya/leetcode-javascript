/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function (n, roads) {
    const edge_count = [];
    let res = 0;
    roads.forEach(([n1, n2]) => {
        edge_count[n1] = (edge_count[n1] || 0) + 1;
        edge_count[n2] = (edge_count[n2] || 0) + 1;
    })
    edge_count.sort((a, b) => b - a)
    console.log(edge_count)
    for (let i = n; i >= 0; i--) {
        const c = edge_count[n - i] || 0;
        console.log("c, i", c, i)
        res += c * i
    }
    return res;
};