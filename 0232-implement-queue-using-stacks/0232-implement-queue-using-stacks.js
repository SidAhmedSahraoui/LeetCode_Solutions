const Stack = function () {
  const stack = []
  return {
    get length() { return stack.length },
    push: x => stack.push(x),
    pop: () => stack.pop(),
    peek: () => stack[stack.length - 1],
  }
}


const MyQueue = function () {
  this.s1 = Stack()
  this.s2 = Stack()
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s2.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.s1.length) {
    return this.s1.pop()
  }
  while (this.s2.length) {
    this.s1.push(this.s2.pop())
  }
  return this.s1.pop()
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.s1.length) {
    return this.s1.peek()
  }
  while (this.s2.length) {
    this.s1.push(this.s2.pop())
  }
  return this.s1.peek()
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.s1.length === 0 && this.s2.length === 0
}