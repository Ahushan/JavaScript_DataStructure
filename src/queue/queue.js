// ===========================
// 📂 queue.js - Queue (Array)
// ===========================

// 1. Syntax for Queue
// A queue is a linear data structure that follows
// FIFO (First In, First Out) principle.
// Example: People standing in a line, first person in line is served first.

class Queue {
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

  // Enqueue → Add element to rear
  enqueue(element) {
    this.items.push(element);
  }

  // Dequeue → Remove element from front
  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items.shift();
  }

  // Peek → See front element
  peek() {
    return this.isEmpty() ? null : this.items[0];
  }

  // Print
  print() {
    console.log(this.items.join(" <- "));
  }
}

// Example Initialization
const queue = new Queue();

// Adding elements
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Queue after enqueues:");
queue.print();

// Removing element
console.log("Dequeued:", queue.dequeue());

// Peeking
console.log("Front element:", queue.peek());

// Final queue
console.log("Queue after operations:");
queue.print();

// 4. Usage Comments
// Queue works on FIFO principle, good for scheduling and resource sharing.

// 5. Pros & Cons
// Pros: Simple to implement, fair ordering of elements.
// Cons: Using arrays, `shift()` has O(n) cost (inefficient for large queues).
// (Better implementation: linked list or circular array).

// 6. Where to Use
// - Task scheduling (CPU jobs, printers).
// - Message queues in communication systems.
// - Breadth-first search (BFS) in graphs.
// - Rate limiting in APIs.

// 7. Real-World Example
// Example: Customer service line simulation
const customerQueue = new Queue();

// Customers arrive
customerQueue.enqueue("Customer A");
customerQueue.enqueue("Customer B");
customerQueue.enqueue("Customer C");

console.log("🧑‍🤝‍🧑 Customers in queue:");
customerQueue.print();

// Serving customers
console.log("Serving:", customerQueue.dequeue());
console.log("Next in line:", customerQueue.peek());
