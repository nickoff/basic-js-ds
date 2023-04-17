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
  
  while(has(l, k)) {
    
    l = removeNode(l, k);
    
  }
  
  return l
  


  function removeNode(node, value) {
    
    if(!node) {return null};

    if(node.value === value) {
      if(node.next) {
        node.value = node.next.value;
        node.next = node.next.next;
      } else {node = null}
        return node
 
    } else {
      node.next = removeNode(node.next, value);
      return node
    }
    
  }

  function has(node, value) {
    return findHas(node, value);
  
    function findHas(node, value) {
    if(!node) {return false};
  
    if(node.value === value) {return true}  
    else {

      return findHas(node.next, value)
    } 
  
    }
  }

}

module.exports = {
  removeKFromList
};
