// * minHeap.js - Min Heap

// 1. Syntax for Min Heap
// A min heap is a complete binary tree where
// the parent node is smaller than its children.
// Implemented using array for simplicity.

class MinHeap {
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

      if (element >= parent) break;

      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  // Extract min (root)
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
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
        if (left < element) swap = leftIndex;
      }

      if (rightIndex < length) {
        right = this.heap[rightIndex];
        if (
          (swap === null && right < element) ||
          (swap !== null && right < left)
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

  // Peek min
  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  // Print heap
  print() {
    console.log("Heap:", this.heap);
  }
}

// Example Initialization
const minHeap = new MinHeap();
minHeap.insert(50);
minHeap.insert(20);
minHeap.insert(30);
minHeap.insert(10);

console.log("Min Heap after insertions:");
minHeap.print();

console.log("Extract Min:", minHeap.extractMin());
console.log("Heap after extracting min:");
minHeap.print();

console.log("Peek Min:", minHeap.peek());

// 4. Usage Comments
// Min heap maintains the smallest element at the root.  
// Used in priority queues and efficient retrieval of minimum.

// 5. Pros & Cons
// Pros: O(log n) insert and remove, efficient min retrieval.  
// Cons: No direct access to arbitrary elements, requires array manipulation.

// 6. Where to Use
// - Priority queues (CPU scheduling, task management).  
// - Dijkstra's algorithm for shortest paths.  
// - Heap sort algorithm.

// 7. Real-World Example
// Example: Task manager with priority
const tasks = new MinHeap();
tasks.insert({ task: "Task A", priority: 3 });
tasks.insert({ task: "Task B", priority: 1 });
tasks.insert({ task: "Task C", priority: 2 });

// Since we need custom comparison, usually we implement a comparator.
// For simplicity, using numbers for priority in real usage.

console.log("Heap of task priorities:");
minHeap.print();

module.exports = { MinHeap };