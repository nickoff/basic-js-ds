const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    if(this.queue) {
      return this.queue
    }
  }

  enqueue(value) {
    
    const newNode = {}
    newNode.value = value;
    newNode.next = null;

    if(!this.queue) {
      this.queue = newNode;
      this.tail = this.queue;
      return this.queue;
    }

    this.tail.next = newNode;
    
     
    this.tail = newNode;

    return this.queue;
  }

  dequeue() {
    if(this.queue) {
      let value = this.queue.value;
      this.queue = this.queue.next;
      return value
    }
    return null
  }
}

module.exports = {
  Queue
};
