/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
  const nums_set = new Set(nums);
  let res_head = null;
  let prev = null;
  while (head) {
    if (nums_set.has(head.val)) {
      if (prev) {
        prev.next = head.next;
      }
    } else {
      prev = head;
      if (!res_head) {
        res_head = head;
      }
    }
    head = head.next;
  }
  return res_head;
};
