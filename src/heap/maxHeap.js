// ===============================
// 📂 maxHeap.js - Max Heap
// ===============================

// 1. Syntax for Max Heap
// A max heap is a complete binary tree where
// the parent node is greater than its children.
// Implemented using an array.

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // 2. Initialization & Declaration
  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  // 3. Basic Operations

  // Insert value
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  // Bubble up to maintain heap property
  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (element <= parent) break;

      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  // Extract max (root)
  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return max;
  }

  // Bubble down to maintain heap property
  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let left, right;
      let swap = null;

      if (leftIndex < length) {
        left = this.heap[leftIndex];
        if (left > element) swap = leftIndex;
      }

      if (rightIndex < length) {
        right = this.heap[rightIndex];
        if (
          (swap === null && right > element) ||
          (swap !== null && right > left)
        ) {
          swap = rightIndex;
        }
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }

  // Peek max
  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  // Print heap
  print() {
    console.log("Heap:", this.heap);
  }
}

// Example Initialization
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(50);
maxHeap.insert(30);
maxHeap.insert(40);

console.log("Max Heap after insertions:");
maxHeap.print();

console.log("Extract Max:", maxHeap.extractMax());
console.log("Heap after extracting max:");
maxHeap.print();

console.log("Peek Max:", maxHeap.peek());

// 4. Usage Comments
// Max heap keeps the largest element at root.  
// Useful in priority queues or sorting (heap sort).

// 5. Pros & Cons
// Pros: O(log n) insert/remove, fast max retrieval.  
// Cons: No direct access to arbitrary elements, requires array operations.

// 6. Where to Use
// - Priority queues (high priority tasks first)  
// - Heap sort algorithm  
// - Event-driven simulations

// 7. Real-World Example
// Example: CPU task scheduler prioritizing highest priority task
const tasks = new MaxHeap();
tasks.insert({ task: "Task A", priority: 3 });
tasks.insert({ task: "Task B", priority: 5 });
tasks.insert({ task: "Task C", priority: 2 });

// Normally, a custom comparator is used for objects.
// For simplicity, using numbers directly.
console.log("Heap of task priorities:");
maxHeap.print();
