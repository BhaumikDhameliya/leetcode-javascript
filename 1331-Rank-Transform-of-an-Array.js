class Node {
  constructor(index, value) {
    this.indices = [index];
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function addNode(root, node) {
  if (root.value > node.value) {
    if (root.left) {
      addNode(root.left, node);
    } else {
      root.left = node;
    }
  } else if (root.value < node.value) {
    if (root.right) {
      addNode(root.right, node);
    } else {
      root.right = node;
    }
  } else {
    root.indices.push(...node.indices);
  }
}
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  let root = null;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    const node = new Node(i, value);
    if (!root) {
      root = node;
    } else {
      addNode(root, node);
    }
  }
  console.log(root);
  let rank = 1;
  function dfs(root) {
    if (!root) return;
    if (root.left) {
      dfs(root.left);
    }
    root.indices.forEach((i) => {
      arr[i] = rank;
    });
    rank++;
    if (root.right) {
      dfs(root.right);
    }
  }
  dfs(root);
  return arr;
};
