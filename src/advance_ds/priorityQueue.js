// * priorityQueue.js - Priority Queue (Min-Heap based)


// 1. Syntax for Priority Queue
// Priority Queue stores elements with priorities. 
// Element with highest priority (lowest number for min-heap) is dequeued first.

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // 2. Initialization & Declaration
  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }

  // 3. Basic Operations

  enqueue(element, priority) {
    const node = { element, priority };
    this.heap.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (element.priority >= parent.priority) break;
      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    if (this.isEmpty()) return null;
    if (this.heap.length === 1) return this.heap.pop().element;

    const min = this.heap[0].element;
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let swap = null;

      if (leftIndex < length && this.heap[leftIndex].priority < element.priority)
        swap = leftIndex;
      if (
        rightIndex < length &&
        this.heap[rightIndex].priority < (swap === null ? element.priority : this.heap[leftIndex].priority)
      )
        swap = rightIndex;

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }

  peek() {
    return this.isEmpty() ? null : this.heap[0].element;
  }

  print() {
    console.log("Priority Queue:", this.heap.map(n => `${n.element}(${n.priority})`).join(" <- "));
  }
}

if (require.main === module) {
  // Example Usage
  const pq = new PriorityQueue();
  pq.enqueue("Task A", 3);
  pq.enqueue("Task B", 1);
  pq.enqueue("Task C", 2);

  console.log("Priority Queue after enqueue:");
  pq.print();

  console.log("Dequeue:", pq.dequeue());
  console.log("Priority Queue after dequeue:");
  pq.print();

  // Example: Printer queue where urgent print jobs go first
  const printerQueue = new PriorityQueue();
  printerQueue.enqueue("Print Document A", 2); // Normal priority
  printerQueue.enqueue("Print Document B", 1); // High priority
  printerQueue.enqueue("Print Document C", 3); // Low priority

  console.log("Printer Queue:");
  printerQueue.print();
}

// 4. Usage Comments
// Priority Queue ensures tasks are executed based on priority rather than insertion order.

// 5. Pros & Cons
// Pros: Efficient retrieval of highest priority, O(log n) operations.  
// Cons: Slightly complex, heap implementation required.

// 6. Where to Use
// - Task scheduling  
// - Dijkstra’s shortest path algorithm  
// - Event-driven simulations

// 7. Real-World Example
// Example: Printer queue where urgent print jobs go first

module.exports = { PriorityQueue };