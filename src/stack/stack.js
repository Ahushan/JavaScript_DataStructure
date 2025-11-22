
// * stack.js - Stack (Array)


// 1. Syntax for Stack
// A stack is a linear data structure that follows
// LIFO (Last In, First Out) principle.
// Example: Pile of books, last kept is first taken out.

class Stack {
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

  // Push → Add element to top
  push(element) {
    this.items.push(element);
  }

  // Pop → Remove element from top
  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }

  // Peek → See top element without removing
  peek() {
    return this.isEmpty() ? null : this.items[this.items.length - 1];
  }

  // Print
  print() {
    console.log(this.items.join(" <- "));
  }
}

if (require.main === module) {
  // Example Initialization
  const stack = new Stack();

  // Adding elements
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log("Stack after pushes:");
  stack.print();

  // Removing element
  console.log("Popped:", stack.pop());

  // Peeking
  console.log("Top element:", stack.peek());

  // Final stack
  console.log("Stack after operations:");
  stack.print();

  // 4. Usage Comments
  // Stack works on LIFO principle, good for backtracking and recursion-like problems.

  // 5. Pros & Cons
  // Pros: Simple to implement, fast operations (O(1) push/pop).
  // Cons: Limited access (only top element accessible).
  // If implemented with arrays, resizing might cost performance in rare cases.

  // 6. Where to Use
  // - Undo/Redo functionality in editors.
  // - Backtracking algorithms (maze solving).
  // - Expression evaluation (postfix/prefix).
  // - Function call stack in programming languages.

  // 7. Real-World Example
  // Example: Browser back navigation (using stack)
  const historyStack = new Stack();

  // User visits pages
  historyStack.push("google.com");
  historyStack.push("youtube.com");
  historyStack.push("github.com");

  // User presses "back"
  console.log("Back to:", historyStack.pop());

  // Current page
  console.log("Current Page:", historyStack.peek());
}

module.exports = { Stack }