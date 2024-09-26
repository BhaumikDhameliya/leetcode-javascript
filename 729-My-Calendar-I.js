class Tree {
  constructor(start, end) {
    this.left = null;
    this.right = null;
    this.start = start;
    this.end = end;
  }

  insert(start, end) {
    let curr = this;
    while (true) {
      if (start >= curr.end) {
        if (!curr.right) {
          curr.right = new Tree(start, end);
          return true;
        }
        curr = curr.right;
      } else if (end <= curr.start) {
        if (!curr.left) {
          curr.left = new Tree(start, end);
          return true;
        }
        curr = curr.left;
      } else {
        return false;
      }
    }
  }
}

class MyCalendar {
  constructor() {
    this.root = null;
  }

  book(start, end) {
    if (!this.root) {
      this.root = new Tree(start, end);
      return true;
    }
    return this.root.insert(start, end);
  }
}
