// ======================================
// 📂 doublyLinkedList.js - Doubly Linked List
// ======================================

// 1. Syntax for Doubly Linked List
// Each node has 'value', 'next' (pointer to next node) and 'prev' (pointer to previous node).

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Add at start
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  // Remove first node
  removeFirst() {
    if (!this.head) return null;
    const removed = this.head;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    this.length--;
    return removed.value;
  }

  // Remove last node
  removeLast() {
    if (!this.tail) return null;
    const removed = this.tail;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    this.length--;
    return removed.value;
  }

  // Print forward
  printForward() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" <-> "));
  }

  // Print backward
  printBackward() {
    let current = this.tail;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.prev;
    }
    console.log(result.join(" <-> "));
  }
}

// Example Initialization
const dll = new DoublyLinkedList();
dll.append(10);
dll.append(20);
dll.prepend(5);

console.log("Doubly Linked List forward:");
dll.printForward();
console.log("Doubly Linked List backward:");
dll.printBackward();

console.log("Removed first:", dll.removeFirst());
console.log("Removed last:", dll.removeLast());
dll.printForward();

// 4. Usage Comments
// Doubly linked list allows traversal in both directions and efficient insert/delete at both ends.

// 5. Pros & Cons
// Pros: Bidirectional traversal, efficient insertion/deletion at head/tail.
// Cons: More memory per node due to 'prev' pointer, slightly complex operations.

// 6. Where to Use
// - Browser history (forward/backward navigation)
// - Undo/Redo functionality
// - Implementing deque

// 7. Real-World Example
// Example: Music playlist where user can go next/previous song
const playlist = new DoublyLinkedList();
playlist.append("Song A");
playlist.append("Song B");
playlist.append("Song C");
console.log("Playlist forward:");
playlist.printForward();
console.log("Playlist backward:");
playlist.printBackward();
