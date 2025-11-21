
// * redBlackTree.js - Red-Black Tree


// 1. Syntax for Red-Black Tree
// Red-Black Tree is a self-balancing BST with these properties:
// 1. Every node is red or black
// 2. Root is black
// 3. Red nodes cannot have red children (no two reds in a row)
// 4. Every path from root to leaf has the same number of black nodes
// 5. Leaves are null (black)

// Node color constants
const RED = "RED";
const BLACK = "BLACK";

class RBNode {
  constructor(value) {
    this.value = value;
    this.color = RED;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  // 2. Initialization & Declaration
  isEmpty() {
    return this.root === null;
  }

  // Left rotate
  leftRotate(x) {
    const y = x.right;
    x.right = y.left;
    if (y.left) y.left.parent = x;
    y.parent = x.parent;
    if (!x.parent) this.root = y;
    else if (x === x.parent.left) x.parent.left = y;
    else x.parent.right = y;
    y.left = x;
    x.parent = y;
  }

  // Right rotate
  rightRotate(y) {
    const x = y.left;
    y.left = x.right;
    if (x.right) x.right.parent = y;
    x.parent = y.parent;
    if (!y.parent) this.root = x;
    else if (y === y.parent.left) y.parent.left = x;
    else y.parent.right = x;
    x.right = y;
    y.parent = x;
  }

  // Insert value
  insert(value) {
    const newNode = new RBNode(value);
    this.root = this.bstInsert(this.root, newNode);
    this.fixInsert(newNode);
  }

  // Standard BST insert
  bstInsert(root, node) {
    if (!root) return node;
    if (node.value < root.value) {
      root.left = this.bstInsert(root.left, node);
      root.left.parent = root;
    } else if (node.value > root.value) {
      root.right = this.bstInsert(root.right, node);
      root.right.parent = root;
    }
    return root;
  }

  // Fix Red-Black properties after insertion
  fixInsert(node) {
    while (node.parent && node.parent.color === RED) {
      let parent = node.parent;
      let grandparent = parent.parent;

      if (parent === grandparent.left) {
        let uncle = grandparent.right;
        if (uncle && uncle.color === RED) {
          parent.color = BLACK;
          uncle.color = BLACK;
          grandparent.color = RED;
          node = grandparent;
        } else {
          if (node === parent.right) {
            node = parent;
            this.leftRotate(node);
          }
          parent.color = BLACK;
          grandparent.color = RED;
          this.rightRotate(grandparent);
        }
      } else {
        let uncle = grandparent.left;
        if (uncle && uncle.color === RED) {
          parent.color = BLACK;
          uncle.color = BLACK;
          grandparent.color = RED;
          node = grandparent;
        } else {
          if (node === parent.left) {
            node = parent;
            this.rightRotate(node);
          }
          parent.color = BLACK;
          grandparent.color = RED;
          this.leftRotate(grandparent);
        }
      }
    }
    this.root.color = BLACK;
  }

  // Inorder traversal
  inorder(node = this.root, result = []) {
    if (!node) return;
    this.inorder(node.left, result);
    result.push(`${node.value}(${node.color})`);
    this.inorder(node.right, result);
    return result;
  }

  printInorder() {
    console.log("Red-Black Tree (Inorder):", this.inorder().join(" -> "));
  }
}

// Example Initialization
const rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
rbTree.insert(15);

console.log("Red-Black Tree Inorder Traversal:");
rbTree.printInorder();

// 4. Usage Comments
// Red-Black Tree keeps BST balanced automatically for O(log n) operations.

// 5. Pros & Cons
// Pros: Always balanced, O(log n) search, insert, delete.  
// Cons: More complex to implement, more rotations on insert/delete.

// 6. Where to Use
// - Memory-efficient ordered maps and sets  
// - Database indexing  
// - Linux kernel scheduler

// 7. Real-World Example
// Example: Java TreeMap, C++ std::map use Red-Black Trees internally

module.exports = { RedBlackTree };