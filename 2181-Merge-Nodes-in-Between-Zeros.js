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
var mergeNodes = function (head) {
    let cur = head;
    let dummy = new ListNode();
    let tail = dummy;
    while (cur.next) {
        let node = new ListNode(0)
        console.log(node)
        while (cur.next.val != 0) {
            node.val += cur.next.val;
            cur = cur.next
        }
        tail.next = node
        tail = tail.next
        cur = cur.next
    }
    return dummy.next;
};