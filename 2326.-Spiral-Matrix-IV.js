/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
  const res = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => -1)
  );
  let i = 0;
  let j = 0;
  const direction_array = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let direction_index = 0;
  while (head) {
    res[i][j] = head.val;
    head = head.next;
    let [d_i, d_j] = direction_array[direction_index];
    const ex_i = i + d_i;
    const ex_j = j + d_j;
    if (ex_j >= n || ex_i >= m || ex_j < 0 || res[ex_i][ex_j] !== -1) {
      direction_index = (direction_index + 1) % 4;
      [d_i, d_j] = direction_array[direction_index];
    }
    i = i + d_i;
    j = j + d_j;
  }
  return res;
};
