/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
  const res = head;
  while (head.next) {
    const gcdNode = new ListNode(gcd(head.val, head.next.val), head.next);
    head.next = gcdNode;
    head = gcdNode.next;
  }
  return res;
};

function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}
