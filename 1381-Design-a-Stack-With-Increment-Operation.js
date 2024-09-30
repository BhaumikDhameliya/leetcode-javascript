/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.stack = [];
  this.maxSize = maxSize;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.stack[this.maxSize - 1] !== undefined) {
    return;
  }
  this.stack.push(x);
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  return this.stack.pop() ?? -1;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  for (let i = 0; i < k && i < this.maxSize; i++) {
    if (this.stack[i] !== undefined) {
      this.stack[i] += val;
    }
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
