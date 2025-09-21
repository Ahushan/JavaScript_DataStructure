// ===============================
// 📂 hashTable.js - Hash Table with Chaining
// ===============================

// 1. Syntax for Hash Table
// Hash table stores key-value pairs using a hash function and handles collisions using chaining (array of buckets).

class HashTable {
  constructor(size = 50) {
    this.size = size;
    this.buckets = Array.from({ length: size }, () => []);
  }

  // 2. Initialization & Declaration
  hash(key) {
    let hashValue = 0;
    const strKey = key.toString();
    for (let char of strKey) {
      hashValue += char.charCodeAt(0);
    }
    return hashValue % this.size;
  }

  // 3. Basic Operations
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let item of bucket) {
      if (item[0] === key) {
        item[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let item of bucket) {
      if (item[0] === key) return item[1];
    }
    return null;
  }

  delete(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  print() {
    console.log("Hash Table Contents:");
    this.buckets.forEach((bucket, index) => {
      if (bucket.length > 0) {
        console.log(index, ":", bucket);
      }
    });
  }
}

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

// 4. Usage Comments
// Hash table allows fast O(1) average lookup, insertion, and deletion with good hash function

// 5. Pros & Cons
// Pros: Fast lookups, efficient insertion/deletion  
// Cons: Can have collisions, needs good hash function, memory overhead

// 6. Where to Use
// - Implementing dictionaries  
// - Cache mechanisms  
// - Storing unique key-value data

// 7. Real-World Example
// Example: Storing user data keyed by user IDs for quick access
