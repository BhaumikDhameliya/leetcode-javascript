/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  const res = [];
  function helper(node) {
    if (!node) return;
    node.children.forEach(helper);
    res.push(node.val);
  }
  helper(root);
  return res;
};
