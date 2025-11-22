// * hashMap.js - Hash Map Example
// 1. Syntax for Hash Map
// A hash map (or dictionary) stores key-value pairs
// and allows fast lookup, insertion, and deletion based on keys.

// Simple implementation using JavaScript object

class HashMap {
  constructor() {
    this.map = new Map();
  }

  // 2. Initialization & Declaration
  set(key, value) {
    this.map[key] = value;
  }

  get(key) {
    return this.map.hasOwnProperty(key) ? this.map[key] : undefined;
  }

  has(key) {
    return this.map.hasOwnProperty(key);
  }

  delete(key) {
    if (this.has(key)) {
      delete this.map[key];
      return true;
    }
    return false;
  }

  keys() {
    return Object.keys(this.map);
  }

  values() {
    return Object.values(this.map);
  }

  size() {
    return Object.keys(this.map).length;
  }

  clear() {
    this.map = {};
  }

  // 3. Basic Operations
  print() {
    console.log("HashMap:", this.map);
  }
}

if (require.main === module) {
  // Example Initialization
  const hashMap = new HashMap();

  // Adding key-value pairs
  hashMap.set("name", "Ahushan");
  hashMap.set("age", 25);
  hashMap.set("role", "Developer");
  hashMap.print();

  // Accessing values
  console.log("Name:", hashMap.get("name"));
  console.log("Has 'age' key:", hashMap.has("age"));

  // Deleting a key
  hashMap.delete("role");
  hashMap.print();

  // Size
  console.log("Size:", hashMap.size());

  // Clearing the map
  hashMap.clear();
  hashMap.print();

  // 4. Usage Comments
  // Hash maps are great for fast lookups, insertions, and deletions by key.

  // 5. Pros & Cons
  // Pros: Fast average O(1) lookup, dynamic storage.  
  // Cons: Collisions in real hash implementations, keys must be unique.

  // 6. Where to Use
  // - Storing user information (ID → profile).  
  // - Caching values for quick access.  
  // - Implementing sets (key as item, value as true).  

  // 7. Real-World Example
  // Example: Counting word frequencies in a document
  const text = "hello world hello javascript";
  const words = text.split(" ");
  const frequencyMap = new HashMap();

  words.forEach(word => {
    frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
  });

  console.log("Word Frequencies:");
  frequencyMap.print();
}

module.exports = { HashMap };