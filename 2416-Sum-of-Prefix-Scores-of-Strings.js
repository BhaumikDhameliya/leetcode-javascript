class PrefixNode {
  constructor() {
    this.children = Array(26);
    this.count = 0;
  }
}

class PrefixTree {
  constructor() {
    this.root = new PrefixNode();
  }

  insert(w) {
    let cur = this.root;
    for (let c of w) {
      let i = c.charCodeAt(0) - "a".charCodeAt(0);
      if (!cur.children[i]) {
        cur.children[i] = new PrefixNode();
      }
      cur = cur.children[i];
      cur.count += 1;
    }
  }

  getScore(w) {
    let cur = this.root;
    let score = 0;
    for (let c of w) {
      let i = c.charCodeAt(0) - "a".charCodeAt(0);
      cur = cur.children[i];
      score += cur.count;
    }
    return score;
  }
}

/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function (words) {
  const res = [];
  const prefixTree = new PrefixTree();
  for (let w of words) {
    prefixTree.insert(w);
  }
  for (let w of words) {
    res.push(prefixTree.getScore(w));
  }
  return res;
};
