/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let res = 0;
  function len(node) {
    if (!node) return 0;
    if (!node.left && !node.right) {
      return 1;
    }
    const leftLen = len(node.left);
    const rightLen = len(node.right);
    res = Math.max(res, leftLen + rightLen);
    return Math.max(leftLen, rightLen) + 1;
  }
  len(root);
  return res;
};
