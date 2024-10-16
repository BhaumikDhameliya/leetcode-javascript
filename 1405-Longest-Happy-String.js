/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  const res = [];
  const maxHeap = new MaxHeap();

  if (a > 0) maxHeap.push([a, "a"]);
  if (b > 0) maxHeap.push([b, "b"]);
  if (c > 0) maxHeap.push([c, "c"]);

  while (maxHeap.size() > 0) {
    let [count, char] = maxHeap.pop();
    const n = res.length;

    // If the last two characters in the result are the same as the current character
    if (n >= 2 && res[n - 1] === char && res[n - 2] === char) {
      if (maxHeap.size() === 0) break;

      const [nextCount, nextChar] = maxHeap.pop();
      res.push(nextChar);
      if (nextCount - 1 > 0) {
        maxHeap.push([nextCount - 1, nextChar]);
      }

      // Put the current character back into the heap
      maxHeap.push([count, char]);
    } else {
      res.push(char);
      if (count - 1 > 0) {
        maxHeap.push([count - 1, char]);
      }
    }
  }

  return res.join("");
};

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Push a new element to the heap
  push(val) {
    this.heap.push(val);
    this._siftUp();
  }

  // Remove and return the maximum element
  pop() {
    if (this.size() === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._siftDown();
    return max;
  }

  // Get the size of the heap
  size() {
    return this.heap.length;
  }

  // Peek the maximum element without removing it
  peek() {
    return this.heap[0];
  }

  // Move the last inserted element up to maintain the heap property
  _siftUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.heap[parentIdx];

      if (element[0] <= parent[0]) break;
      this.heap[idx] = parent;
      idx = parentIdx;
    }

    this.heap[idx] = element;
  }

  // Move the root element down to maintain the heap property
  _siftDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild[0] > element[0]) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if (
          (swap === null && rightChild[0] > element[0]) ||
          (swap !== null && rightChild[0] > leftChild[0])
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.heap[idx] = this.heap[swap];
      idx = swap;
    }

    this.heap[idx] = element;
  }
}
