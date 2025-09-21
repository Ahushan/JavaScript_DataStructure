// ======================================
// 📂 singlyLinkedList.js - Singly Linked List
// ======================================

// 1. Syntax for Singly Linked List
// A linked list is a linear data structure where each node points to the next node.
// Singly linked list has nodes with 'value' and 'next'.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      this.head = newNode;
    }
    this.length++;
  }

  // Remove first node
  removeFirst() {
    if (!this.head) return null;
    const removed = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return removed.value;
  }

  // Remove last node
  removeLast() {
    if (!this.head) return null;
    if (this.length === 1) {
      const removed = this.head;
      this.head = this.tail = null;
      this.length--;
      return removed.value;
    }

    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    const removed = this.tail;
    current.next = null;
    this.tail = current;
    this.length--;
    return removed.value;
  }

  // Print list
  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}

// Example Initialization
const linkedList = new SinglyLinkedList();

// Add nodes
linkedList.append(10);
linkedList.append(20);
linkedList.prepend(5);
console.log("Linked List after additions:");
linkedList.print();

// Remove nodes
console.log("Removed first:", linkedList.removeFirst());
console.log("Removed last:", linkedList.removeLast());
console.log("Linked List after removals:");
linkedList.print();

// 4. Usage Comments
// Linked list is good when frequent insertions/deletions are needed.
// No fixed size; nodes can be added dynamically.

// 5. Pros & Cons
// Pros: Dynamic size, efficient insert/delete at head/tail.  
// Cons: No direct access by index, traversal is O(n).

// 6. Where to Use
// - Implement stacks/queues.
// - Dynamic memory allocation.
// - Undo/Redo functionality.

// 7. Real-World Example
// Example: Music playlist where songs are added or removed dynamically
const playlist = new SinglyLinkedList();
playlist.append("Song A");
playlist.append("Song B");
playlist.append("Song C");
console.log("🎵 Playlist:");
playlist.print();
playlist.removeFirst(); // Remove played song
console.log("Playlist after playing one song:");
playlist.print();
