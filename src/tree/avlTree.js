// ===============================
// 📂 avlTree.js - AVL Tree (Self-Balancing BST)
// ===============================

// 1. Syntax for AVL Tree
// AVL Tree is a BST where heights of left & right subtrees differ by at most 1.
// Automatically balances after insertions/deletions.

class AVLNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  // 2. Initialization & Declaration
  getHeight(node) {
    return node ? node.height : 0;
  }

  getBalance(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  // 3. Basic Operations

  // Right rotate
  rightRotate(y) {
    const x = y.left;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
    x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));

    return x;
  }

  // Left rotate
  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));

    return y;
  }

  // Insert value
  insertNode(node, value) {
    if (!node) return new AVLNode(value);

    if (value < node.value) node.left = this.insertNode(node.left, value);
    else if (value > node.value) node.right = this.insertNode(node.right, value);
    else return node; // duplicate values not allowed

    // Update height
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    // Check balance
    const balance = this.getBalance(node);

    // Left Left
    if (balance > 1 && value < node.left.value) return this.rightRotate(node);

    // Right Right
    if (balance < -1 && value > node.right.value) return this.leftRotate(node);

    // Left Right
    if (balance > 1 && value > node.left.value) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left
    if (balance < -1 && value < node.right.value) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }

  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  // Inorder traversal
  inorder(node = this.root) {
    if (!node) return [];
    return [...this.inorder(node.left), node.value, ...this.inorder(node.right)];
  }

  printInorder() {
    console.log("Inorder:", this.inorder().join(" -> "));
  }
}

// Example Initialization
const avl = new AVLTree();
avl.insert(30);
avl.insert(20);
avl.insert(40);
avl.insert(10);
avl.insert(25);

console.log("AVL Tree Inorder Traversal:");
avl.printInorder();

// 4. Usage Comments
// AVL Tree keeps BST balanced automatically for fast O(log n) search, insert, delete.

// 5. Pros & Cons
// Pros: Always balanced → O(log n) operations.  
// Cons: More complex rotations, slightly higher memory usage.

// 6. Where to Use
// - Database indexing  
// - Memory-efficient ordered maps  
// - Any scenario needing balanced search tree

// 7. Real-World Example
// Example: Maintaining a sorted leaderboard
const leaderboard = new AVLTree();
leaderboard.insert(500);
leaderboard.insert(300);
leaderboard.insert(700);
leaderboard.insert(600);
leaderboard.insert(800);

console.log("Leaderboard scores (inorder):");
leaderboard.printInorder();
