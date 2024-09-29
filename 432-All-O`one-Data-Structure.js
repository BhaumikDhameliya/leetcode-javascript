class AllOne {
  constructor() {
    // Doubly Linked List node to store count and a set of strings with that count
    this.Node = function (count) {
      this.count = count;
      this.keys = new Set();
      this.prev = null;
      this.next = null;
    };

    // Hash map to store key -> count node
    this.mp = new Map();

    // Initialize head and tail dummy nodes for the doubly linked list
    this.head = new this.Node(0);
    this.tail = this.head;
  }

  // Add a new node with count `c` after node `prevNode`
  addNodeAfter(prevNode, count) {
    const newNode = new this.Node(count);
    newNode.next = prevNode.next;
    newNode.prev = prevNode;
    if (prevNode.next) {
      prevNode.next.prev = newNode;
    }
    prevNode.next = newNode;
    if (this.tail === prevNode) {
      this.tail = newNode;
    }
    return newNode;
  }

  // Remove the node from the doubly linked list
  removeNode(node) {
    node.prev.next = node.next;
    if (node.next) {
      node.next.prev = node.prev;
    }
    if (this.tail === node) {
      this.tail = node.prev;
    }
  }

  inc(key) {
    if (!this.mp.has(key)) {
      // Key doesn't exist, add it to the list after the head with count 1
      if (!this.head.next || this.head.next.count !== 1) {
        this.addNodeAfter(this.head, 1);
      }
      this.head.next.keys.add(key);
      this.mp.set(key, this.head.next);
    } else {
      // Key exists, move it to the next count
      const curNode = this.mp.get(key);
      const curCount = curNode.count;
      if (!curNode.next || curNode.next.count !== curCount + 1) {
        this.addNodeAfter(curNode, curCount + 1);
      }
      curNode.next.keys.add(key);
      this.mp.set(key, curNode.next);
      curNode.keys.delete(key);
      if (curNode.keys.size === 0) {
        this.removeNode(curNode);
      }
    }
  }

  dec(key) {
    if (!this.mp.has(key)) {
      return;
    }

    const curNode = this.mp.get(key);
    const curCount = curNode.count;

    // Remove the key if count becomes zero
    curNode.keys.delete(key);
    if (curCount === 1) {
      this.mp.delete(key);
    } else {
      // Move it to the previous count
      if (curNode.prev === this.head || curNode.prev.count !== curCount - 1) {
        this.addNodeAfter(curNode.prev, curCount - 1);
      }
      curNode.prev.keys.add(key);
      this.mp.set(key, curNode.prev);
    }

    // Remove the current node if it has no more keys
    if (curNode.keys.size === 0) {
      this.removeNode(curNode);
    }
  }

  getMaxKey() {
    return this.tail === this.head ? "" : Array.from(this.tail.keys)[0];
  }

  getMinKey() {
    return this.head.next === null ? "" : Array.from(this.head.next.keys)[0];
  }
}
