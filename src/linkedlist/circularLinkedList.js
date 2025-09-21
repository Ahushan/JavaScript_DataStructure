// ======================================
// 📂 circularLinkedList.js - Circular Linked List
// ======================================

// 1. Syntax for Circular Linked List
// Last node points back to head, forming a circle.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 2. Initialization & Declaration
  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  // 3. Basic Operations

  // Add at end
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
    this.length++;
  }

  // Remove first node
  removeFirst() {
    if (!this.head) return null;
    const removed = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.tail.next = this.head;
    }
    this.length--;
    return removed.value;
  }

  // Print list
  print(limit = 20) {
    let current = this.head;
    let result = [];
    let count = 0;
    while (current && count < limit) {
      result.push(current.value);
      current = current.next;
      count++;
    }
    console.log(result.join(" -> ") + " -> ... (circular)");
  }
}

// Example Initialization
const cll = new CircularLinkedList();
cll.append(10);
cll.append(20);
cll.append(30);

console.log("Circular Linked List:");
cll.print();

console.log("Removed first:", cll.removeFirst());
cll.print();

// 4. Usage Comments
// Circular linked list allows circular traversal without null termination.

// 5. Pros & Cons
// Pros: Continuous traversal, suitable for round-robin scheduling.
// Cons: Can get stuck in infinite loops if not careful.

// 6. Where to Use
// - Multiplayer games (round-robin turn)
// - Music playlist repeat
// - CPU task scheduling

// 7. Real-World Example
// Example: Player turns in a game
const players = new CircularLinkedList();
players.append("Alice");
players.append("Bob");
players.append("Charlie");
console.log("Player turns:");
players.print();
