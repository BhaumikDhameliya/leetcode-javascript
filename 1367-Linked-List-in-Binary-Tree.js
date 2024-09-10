/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  function recursive_check(head, root) {
    if (!root) return false;
    if (head.val !== root.val) return false;
    if (!head.next) return true;
    return (
      recursive_check(head.next, root.left) ||
      recursive_check(head.next, root.right)
    );
  }
  if (recursive_check(head, root)) return true;
  if (!root) return false;
  return isSubPath(root.left) || isSubPath(root.right);
};
