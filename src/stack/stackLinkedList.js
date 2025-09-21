// ===========================
// 📂 stackLinkedList.js - Stack using Linked List
// ===========================

// 1. Syntax for Stack
// Stack is LIFO (Last In First Out). Using linked list, the top is the head of the list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackLinkedList {
  constructor() {
    this.head = null; // top of the stack
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

  // Push → add element to top
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // Pop → remove element from top
  pop() {
    if (this.isEmpty()) return "Stack is empty";
    const removed = this.head;
    this.head = this.head.next;
    this.length--;
    return removed.value;
  }

  // Peek → see top element
  peek() {
    return this.isEmpty() ? null : this.head.value;
  }

  // Print stack
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
const stackLL = new StackLinkedList();

// Adding elements
stackLL.push(10);
stackLL.push(20);
stackLL.push(30);
console.log("Stack after pushes:");
stackLL.print();

// Removing element
console.log("Popped:", stackLL.pop());

// Peeking
console.log("Top element:", stackLL.peek());

// Final stack
console.log("Stack after operations:");
stackLL.print();

// 4. Usage Comments
// Stack via linked list avoids array resizing issues and allows dynamic size.

// 5. Pros & Cons
// Pros: O(1) push/pop, dynamic memory usage, no array limits.
// Cons: Extra memory per node, slightly more complex than array stack.

// 6. Where to Use
// - Backtracking algorithms
// - Undo/Redo operations
// - Function call stack simulation

// 7. Real-World Example
// Example: Browser back button history using linked list stack
const browserStack = new StackLinkedList();
browserStack.push("google.com");
browserStack.push("youtube.com");
browserStack.push("github.com");

console.log("Browser Stack:");
browserStack.print();
console.log("Back to:", browserStack.pop());
console.log("Current page:", browserStack.peek());
