var MyCircularDeque = function(k) {
    this.size = k;
    this.count = 0;
    this.head = new ListNode(-1);
    this.tail = new ListNode(-1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.isFull()) return false;
    var node = new ListNode(value);
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
    this.count++;
    return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.isFull()) return false;
    var node = new ListNode(value);
    node.prev = this.tail.prev;
    this.tail.prev.next = node;
    this.tail.prev = node;
    node.next = this.tail;
    this.count++;
    return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.isEmpty()) return false;
    this.head.next = this.head.next.next;
    this.head.next.prev = this.head;
    this.count--;
    return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.isEmpty()) return false;
    this.tail.prev = this.tail.prev.prev;
    this.tail.prev.next = this.tail;
    this.count--;
    return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(this.isEmpty()) return -1;
    return this.head.next.val;
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.isEmpty()) return -1;
    return this.tail.prev.val;
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.count === 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.count === this.size;
};

var ListNode = function(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
}