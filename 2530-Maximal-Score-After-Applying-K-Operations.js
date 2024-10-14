/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  let res = 0;

  // Initialize the max-heap
  const maxHeap = new MaxHeap();

  // Add all elements into the max heap
  for (const num of nums) {
    maxHeap.push(num);
  }

  // Perform the operations k times
  while (k > 0) {
    const n = maxHeap.pop();
    res += n;
    k--;

    // Push the modified element back into the heap
    maxHeap.push(Math.ceil(n / 3));
  }

  return res;
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

  // Move the last inserted element up to maintain the heap property
  _siftUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.heap[parentIdx];

      if (element <= parent) break;
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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
