
// * hashTable.js - Hash Table Implementation Example

// 1. Syntax for Hash Table
// Hash table stores key-value pairs using a Map, but we can implement it using an object as well.
// creatting in object - its not a true hash table but simulates its behavior.

// 2. Implementation

class HashTable {
  constructor() {
    this.table = new Map();
  }

  // 3. Basic Operations
  set(key, value) {
    this.table.set(key, value);
  }


  get(key) {
    if (this.table.has(key)) {
      return this.table.get(key);
    } else {
      return undefined;
    }
  }

  delete(key) {
    if (this.table.has(key)) {
      this.table.delete(key);
      return true;
    }
    return false;
  }

  print() {
    console.log("Hash Table Contents:");
    for (let [key, value] of this.table.entries()) {
      console.log(`${key} : ${value}`);
    }
  }
}

if (require.main === module) {
  // Example Usage
  const hashTable = new HashTable();
  hashTable.set("name", "Ahushan");
  hashTable.set("age", 23);
  hashTable.set(100, "Number key");

  console.log("Get 'name':", hashTable.get("name"));
  console.log("Get 'age':", hashTable.get("age"));

  hashTable.print();

  hashTable.delete(100);
  console.log("After deleting key 100:");
  hashTable.print();
}
// 4. Usage Comments
// Hash table allows fast O(1) average lookup, insertion, and deletion

// 5. Pros & Cons
// Pros: Fast lookups, efficient insertion/deletion  
// Cons: Can have collisions, needs good hash function, memory overhead

// 6. Where to Use
// - Implementing dictionaries  
// - Cache mechanisms  
// - Storing unique key-value data

// 7. Real-World Example
// Example: Storing user data keyed by user IDs for quick access

module.exports = { HashTable };