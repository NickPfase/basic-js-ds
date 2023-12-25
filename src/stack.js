const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  nik = []
  push(element) {
    this.nik.push(element)
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  pop() {
    return this.nik.pop()
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  peek() {
    return this.nik[this.nik.length - 1]
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack
};
