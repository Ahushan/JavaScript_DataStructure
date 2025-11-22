// * binarySearchTree.js - BST Implementation
// 1. Syntax for Binary Search Tree (BST)
// A tree where each node has up to two children.
// Left child < Parent < Right child.

// Node structure
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BST structure
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 2. Initialization & Declaration
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // 3. Basic Operations

  // Search a value
  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  // Inorder Traversal (Left → Root → Right)
  inorder(node = this.root) {
    if (!node) return;
    this.inorder(node.left);
    console.log(node.value);
    this.inorder(node.right);
  }

  // Min Value
  findMin(node = this.root) {
    while (node.left) node = node.left;
    return node.value;
  }

  // Max Value
  findMax(node = this.root) {
    while (node.right) node = node.right;
    return node.value;
  }
}
if (require.main === module) {

  // Example Initialization
  const bst = new BinarySearchTree();
  bst.insert(50);
  bst.insert(30);
  bst.insert(70);
  bst.insert(20);
  bst.insert(40);
  bst.insert(60);
  bst.insert(80);

  // Traversal
  console.log("Inorder Traversal:");
  bst.inorder();

  // Search
  console.log("Search 60:", bst.search(60));
  console.log("Search 90:", bst.search(90));

  // Min & Max
  console.log("Min Value:", bst.findMin());
  console.log("Max Value:", bst.findMax());

  // 4. Usage Comments
  // BST maintains sorted data and allows efficient search, insert, and delete.

  // 5. Pros & Cons
  // Pros: O(log n) average time for search, insert, delete (balanced BST).
  // Cons: Worst case O(n) if tree becomes skewed (like a linked list).
  // Requires balancing (AVL, Red-Black Tree) for efficiency.

  // 6. Where to Use
  // - Storing sorted data for quick lookup.
  // - Implementing sets, maps, and databases.
  // - Auto-suggestion systems (prefix search).
  // - Range queries (find min/max within range).

  // 7. Real-World Example
  // Example: Student Score Management
  let scores = new BinarySearchTree();
  scores.insert(85);
  scores.insert(70);
  scores.insert(95);
  scores.insert(60);
  scores.insert(90);

  console.log("Student Scores (Inorder - Sorted):");
  scores.inorder();
  console.log("Find top score:", scores.findMax());
  console.log("Find lowest score:", scores.findMin());

}
module.exports = { BinarySearchTree }