// * queueLinkedList.js - Queue using Linked List

// 1. Syntax for Queue
// Queue is FIFO (First In First Out). Using linked list, head = front, tail = rear.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueLinkedList {
  constructor() {
    this.head = null; // front
    this.tail = null; // rear
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

  // Enqueue → add element to rear
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Dequeue → remove element from front
  dequeue() {
    if (!this.head) return "Queue is empty";
    const removed = this.head;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.length--;
    return removed.value;
  }

  // Peek → see front element
  peek() {
    return this.isEmpty() ? null : this.head.value;
  }

  // Print queue
  print() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" <- "));
  }
}

// Example Initialization
const queueLL = new QueueLinkedList();

// Adding elements
queueLL.enqueue(10);
queueLL.enqueue(20);
queueLL.enqueue(30);
console.log("Queue after enqueues:");
queueLL.print();

// Removing element
console.log("Dequeued:", queueLL.dequeue());

// Peeking
console.log("Front element:", queueLL.peek());

// Final queue
console.log("Queue after operations:");
queueLL.print();

// 4. Usage Comments
// Linked list queue avoids array shift() overhead and allows dynamic memory.

// 5. Pros & Cons
// Pros: O(1) enqueue/dequeue, dynamic memory, no array resizing.
// Cons: Extra memory per node, slightly more complex than array queue.

// 6. Where to Use
// - Task scheduling
// - BFS traversal
// - Message queues

// 7. Real-World Example
// Example: Customer service line simulation
const customerQueue = new QueueLinkedList();
customerQueue.enqueue("Customer A");
customerQueue.enqueue("Customer B");
customerQueue.enqueue("Customer C");

console.log("Queue of customers:");
customerQueue.print();
console.log("Serving:", customerQueue.dequeue());
console.log("Next in line:", customerQueue.peek());

module.exports = { QueueLinkedList }