
// * mapWrapper.js - JS Map Wrapper


// 1. Syntax for Map
// Map stores key-value pairs. Keys can be any type. Maintains insertion order.

class MapWrapper {
  constructor() {
    this.map = new Map();
  }

  // 2. Initialization & Declaration
  isEmpty() {
    return this.map.size === 0;
  }

  size() {
    return this.map.size;
  }

  // 3. Basic Operations
  set(key, value) {
    this.map.set(key, value);
  }

  get(key) {
    return this.map.get(key);
  }

  has(key) {
    return this.map.has(key);
  }

  delete(key) {
    return this.map.delete(key);
  }

  clear() {
    this.map.clear();
  }

  print() {
    console.log("Map Contents:");
    for (let [key, value] of this.map.entries()) {
      console.log(key, ":", value);
    }
  }
}
if (require.main === module) {

  // Example Usage
  const mapWrapper = new MapWrapper();
  mapWrapper.set("name", "Ahushan");
  mapWrapper.set("age", 23);
  mapWrapper.set(100, "Number key");

  console.log("Has 'name'? ", mapWrapper.has("name"));
  console.log("Get 'age':", mapWrapper.get("age"));

  mapWrapper.print();

  mapWrapper.delete(100);
  console.log("After deleting key 100:");
  mapWrapper.print();

  // 4. Usage Comments
  // JS Map is more flexible than object, allows non-string keys and preserves order

  // 5. Pros & Cons
  // Pros: Flexible keys, iterable, ordered.  
  // Cons: Slightly slower than object for string keys in some cases.

  // 6. Where to Use
  // - When you need ordered key-value pairs  
  // - Complex key types (objects, functions)  
  // - Lookup with dynamic keys

  // 7. Real-World Example
  // Example: Storing user sessions keyed by session objects
}
module.exports = { MapWrapper };