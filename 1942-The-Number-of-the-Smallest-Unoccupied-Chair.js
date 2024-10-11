// MinHeap implementation for managing priority queue
class MinHeap {
  constructor(compareFn = (a, b) => a - b) {
    this.heap = [];
    this.compareFn = compareFn;
  }

  push(val) {
    this.heap.push(val);
    this._bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.size() === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown(0);
    return top;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  _bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.compareFn(this.heap[parentIndex], this.heap[index]) <= 0) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  _bubbleDown(index) {
    const length = this.heap.length;
    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (
        left < length &&
        this.compareFn(this.heap[left], this.heap[smallest]) < 0
      ) {
        smallest = left;
      }
      if (
        right < length &&
        this.compareFn(this.heap[right], this.heap[smallest]) < 0
      ) {
        smallest = right;
      }
      if (smallest === index) break;

      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];
      index = smallest;
    }
  }
}

/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function (times, targetFriend) {
  let nextUnsatChair = 0;
  const emptyChairs = new MinHeap(); // MinHeap to simulate empty chairs priority queue
  const occupied = new MinHeap((a, b) => a[0] - b[0]); // MinHeap for occupied chairs by leaving time

  // Add index as the third element in times array
  times = times.map((time, i) => [...time, i]);

  // Sort times by arrival time
  times.sort((a, b) => a[0] - b[0]);

  for (let time of times) {
    const [arrival, leaving, i] = time;

    // Free up chairs from people who have left by the time the new person arrives
    while (occupied.size() > 0 && occupied.peek()[0] <= arrival) {
      emptyChairs.push(occupied.pop()[1]);
    }

    // If the current person is the targetFriend, return the chair they would sit in
    if (i === targetFriend) {
      return emptyChairs.size() > 0 ? emptyChairs.peek() : nextUnsatChair;
    }

    // Assign a chair to the current person
    if (emptyChairs.size() > 0) {
      occupied.push([leaving, emptyChairs.pop()]);
    } else {
      occupied.push([leaving, nextUnsatChair++]);
    }
  }

  throw new Error("IllegalArgumentException");
};
