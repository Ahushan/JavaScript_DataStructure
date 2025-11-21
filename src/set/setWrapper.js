// * setWrapper.js - Set Wrapper
// 1. Syntax for Set
// A Set is a collection of unique values (no duplicates).
// Example: let mySet = new Set([1, 2, 3]);

class SetWrapper {
  constructor() {
    this.set = new Set();
  }

  // 2. Initialization & Declaration
  add(value) {
    this.set.add(value);
  }

  delete(value) {
    return this.set.delete(value);
  }

  remove(value) {
    if (this.set.has(value)) {
      this.set.delete(value);
      return true;
    }
    return false;
  }

  has(value) {
    return this.set.has(value);
  }

  size() {
    return this.set.size;
  }

  clear() {
    this.set.clear();
  }

  values() {
    return [...this.set];
  }

  // 3. Basic Operations
  print() {
    console.log("Set:", [...this.set]);
  }
}

// Example Initialization
const mySet = new SetWrapper();

// Adding values
mySet.add(10);
mySet.add(20);
mySet.add(10); // duplicate ignored
mySet.print();

// Checking existence
console.log("Has 20:", mySet.has(20));
console.log("Has 30:", mySet.has(30));

// Deleting
mySet.delete(10);
mySet.print();

// Getting size
console.log("Size:", mySet.size());

// Clearing set
mySet.clear();
mySet.print();

// 4. Usage Comments
// Set ensures all values are unique, preventing duplicates automatically.

// 5. Pros & Cons
// Pros: Unique values, fast lookup (O(1) average for add, delete, has).
// Cons: No direct access by index (like arrays), order not guaranteed (though ES6 keeps insertion order).

// 6. Where to Use
// - Removing duplicates from arrays.
// - Tracking unique items (user IDs, tags, categories).
// - Membership tests (fast `has` checks).

// 7. Real-World Example
// Example: Tracking unique visitors on a website
const uniqueVisitors = new SetWrapper();

uniqueVisitors.add("user1");
uniqueVisitors.add("user2");
uniqueVisitors.add("user3");
uniqueVisitors.add("user1"); // duplicate ignored

console.log("Unique Visitors:", uniqueVisitors.values());
console.log("Total Visitors:", uniqueVisitors.size());

module.exports = { SetWrapper }