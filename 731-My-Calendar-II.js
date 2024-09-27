var MyCalendarTwo = function () {
  this.non_overlapping = [];
  this.overlapping = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
  for (let i = 0; i < this.overlapping.length; i++) {
    const [s, e] = this.overlapping[i];
    if (e > start && end > s) {
      return false;
    }
  }
  for (let i = 0; i < this.non_overlapping.length; i++) {
    const [s, e] = this.non_overlapping[i];
    if (e > start && end > s) {
      this.overlapping.push([Math.max(s, start), Math.min(e, end)]);
    }
  }
  this.non_overlapping.push([start, end]);
  return true;
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
