// ===============================
// 📂 disjointSet.js - Disjoint Set / Union-Find
// ===============================

// 1. Syntax for Disjoint Set
// Disjoint Set keeps track of disjoint sets for union and find operations.
// Supports Union by Rank and Path Compression for efficiency.

class DisjointSet {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = Array(size).fill(0);
  }

  // 2. Initialization & Declaration
  find(u) {
    if (this.parent[u] !== u) {
      this.parent[u] = this.find(this.parent[u]); // Path compression
    }
    return this.parent[u];
  }

  union(u, v) {
    const rootU = this.find(u);
    const rootV = this.find(v);

    if (rootU === rootV) return; // already connected

    // Union by rank
    if (this.rank[rootU] < this.rank[rootV]) {
      this.parent[rootU] = rootV;
    } else if (this.rank[rootU] > this.rank[rootV]) {
      this.parent[rootV] = rootU;
    } else {
      this.parent[rootV] = rootU;
      this.rank[rootU]++;
    }
  }

  connected(u, v) {
    return this.find(u) === this.find(v);
  }

  print() {
    console.log("Parent Array:", this.parent);
    console.log("Rank Array:", this.rank);
  }
}

// Example Usage
const ds = new DisjointSet(5);
ds.union(0, 1);
ds.union(1, 2);
ds.union(3, 4);

console.log("Are 0 and 2 connected?", ds.connected(0, 2)); // true
console.log("Are 0 and 4 connected?", ds.connected(0, 4)); // false

ds.print();

// 4. Usage Comments
// Disjoint Set efficiently tracks connected components in a set of elements.

// 5. Pros & Cons
// Pros: Very fast O(α(n)) operations with path compression and union by rank.  
// Cons: Only supports union/find operations, no ordering.

// 6. Where to Use
// - Kruskal’s MST algorithm  
// - Network connectivity checks  
// - Grouping/cluster detection

// 7. Real-World Example
// Example: Social network friend groups (connected components)
