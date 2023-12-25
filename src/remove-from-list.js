const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // var nik = {};
  // var tom = [l];
  // // tom.Array.from(l)
  // // return nik.push(l.filter((el) => el !== k))
  // for (let i = 0; i < l.length; i += 1) {
  //   if (tom[i] === k) {
  //     nik.push(tom[i])
  //   }
  // } return nik
  // class nik {
  //   constructor(tom) {
  //     tookOff(){

  //     }
  //   }
  // }
}

module.exports = {
  removeKFromList
};
