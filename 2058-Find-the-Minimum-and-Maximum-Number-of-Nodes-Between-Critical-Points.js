/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

var nodesBetweenCriticalPoints = function (head) {

    function critical(prev, cur, next) {
        return (prev.val < cur.val && next.val < cur.val) || (prev.val > cur.val && next.val > cur.val)
    }

    let prev = head
    let cur = head.next
    let nxt = cur.next
    let min_dist = Infinity
    let max_dist = -1
    let prev_crit_idx = 0;
    let first_crit_idx = 0;
    let i = 1 // index of cur

    while (nxt) {
        if (critical(prev, cur, nxt)) {
            if (first_crit_idx) {
                max_dist = i - first_crit_idx;
                min_dist = Math.min(min_dist, i - prev_crit_idx)
            } else {
                first_crit_idx = i
            }
            prev_crit_idx = i
        }
        prev = cur
        cur = nxt
        nxt = nxt.next
        i += 1
    }

    if (min_dist === Infinity) {
        min_dist = -1;
    }
    return [min_dist, max_dist];
};