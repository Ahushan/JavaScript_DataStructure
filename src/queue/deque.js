// ===============================
// 📂 deque.js - Double-Ended Queue
// ===============================

// 1. Syntax for Deque
// A deque (double-ended queue) allows insertion and deletion
// at both the front and the rear.

// Class implementation
class Deque {
  constructor() {
    this.items = [];
  }

  // 2. Initialization & Declaration
  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  // 3. Basic Operations

  // Add element at the rear
  addRear(element) {
    this.items.push(element);
  }

  // Add element at the front
  addFront(element) {
    this.items.unshift(element);
  }

  // Remove element from the rear
  removeRear() {
    if (this.isEmpty()) return "Deque is empty";
    return this.items.pop();
  }

  // Remove element from the front
  removeFront() {
    if (this.isEmpty()) return "Deque is empty";
    return this.items.shift();
  }

  // Peek front
  peekFront() {
    return this.isEmpty() ? null : this.items[0];
  }

  // Peek rear
  peekRear() {
    return this.isEmpty() ? null : this.items[this.items.length - 1];
  }

  // Print
  print() {
    console.log(this.items.join(" <-> "));
  }
}

// Example Initialization
const deque = new Deque();

// Adding elements
deque.addRear(10);
deque.addRear(20);
deque.addFront(5);
deque.addFront(1);

console.log("Deque after insertions:");
deque.print();

// Removing elements
console.log("Removed from front:", deque.removeFront());
console.log("Removed from rear:", deque.removeRear());

console.log("Deque after deletions:");
deque.print();

// Peek values
console.log("Front:", deque.peekFront());
console.log("Rear:", deque.peekRear());

// 4. Usage Comments
// Deque is more versatile than a queue since we can add/remove from both ends.

// 5. Pros & Cons
// Pros: Flexible, can be used as both stack & queue.
// Cons: Slightly more complex than simple queues/stacks, higher memory use if implemented naively.

// 6. Where to Use
// - Palindrome checking (compare front & rear characters).
// - Task scheduling (process at both ends).
// - Undo/Redo functionality.
// - Sliding window problems in algorithms.

// 7. Real-World Example
// Example: Browser history navigation
const browserHistory = new Deque();

// Visit pages
browserHistory.addRear("google.com");
browserHistory.addRear("youtube.com");
browserHistory.addRear("github.com");

// User presses "back"
console.log("⬅️ Back:", browserHistory.removeRear());

// User presses "forward" (simulate by adding at rear again)
browserHistory.addRear("github.com");

console.log("🌐 Current Browser History:");
browserHistory.print();
