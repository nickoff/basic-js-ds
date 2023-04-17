const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    if(this.tree) {
      return this.tree;
    }
    return null
  }

  add(data) {
    const newNode = {}
    newNode.data = data;
    newNode.nextLeft = null;
    newNode.nextRigth = null;


    this.tree = addNode(this.tree, data);

    function addNode(node, data) {
      

        if(!node) {
          return newNode
        }

        if(node.data === data) {return node};
      

        if(node.data > data) {
          node.nextLeft = addNode (node.nextLeft, data);
        }
        else {
          node.nextRigth = addNode (node.nextRigth, data);
        }

        return node
      }
    }


  has(data) {
    return findHas(this.tree, data);

    function findHas(node, data) {
    if(!node) {return false};

    if(node.data === data) {return true};

    if(data < node.data) {
      return findHas(node.nextLeft, data)
    } else {return findHas(node.nextRigth, data)}

    }
  }

  find(data) {
    return findNode(this.tree, data);

    function findNode(node, data) {
    if(!node) {return node};

    if(node.data === data) {return node};

    if(data < node.data) {
      return findNode(node.nextLeft, data)
    } else {return findNode(node.nextRigth, data)}

    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};