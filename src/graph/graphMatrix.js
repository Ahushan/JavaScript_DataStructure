// ===============================
// 📂 graphMatrix.js - Graph using Adjacency Matrix
// ===============================

// 1. Syntax for Graph (Adjacency Matrix)
// Represent graph using a 2D matrix where matrix[i][j] = 1 if edge exists, else 0.

class GraphMatrix {
  constructor(vertices) {
    this.vertices = vertices;
    this.matrix = Array.from({ length: vertices }, () =>
      Array(vertices).fill(0)
    );
  }

  // 2. Initialization & Declaration
  printMatrix() {
    console.log("Adjacency Matrix:");
    console.table(this.matrix);
  }

  // 3. Basic Operations

  // Add edge (undirected graph)
  addEdge(v1, v2) {
    if (v1 >= this.vertices || v2 >= this.vertices) return;
    this.matrix[v1][v2] = 1;
    this.matrix[v2][v1] = 1; // remove if directed
  }

  // Remove edge
  removeEdge(v1, v2) {
    if (v1 >= this.vertices || v2 >= this.vertices) return;
    this.matrix[v1][v2] = 0;
    this.matrix[v2][v1] = 0; // remove if directed
  }

  // Check if edge exists
  hasEdge(v1, v2) {
    if (v1 >= this.vertices || v2 >= this.vertices) return false;
    return this.matrix[v1][v2] === 1;
  }
}

// Example Initialization
const graph = new GraphMatrix(4);

// Add edges
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 3);

console.log("Graph adjacency matrix:");
graph.printMatrix();

// Check edge
console.log("Edge between 0 and 2:", graph.hasEdge(0, 2));
console.log("Edge between 1 and 3:", graph.hasEdge(1, 3));

// Remove edge
graph.removeEdge(0, 2);
console.log("Graph after removing edge 0-2:");
graph.printMatrix();

// 4. Usage Comments
// Adjacency matrix provides O(1) edge lookup, easy to implement for dense graphs.

// 5. Pros & Cons
// Pros: Simple, quick to check edge existence.  
// Cons: O(V^2) space, inefficient for sparse graphs.

// 6. Where to Use
// - Dense graphs  
// - Graph algorithms where edge lookup is frequent

// 7. Real-World Example
// Example: Airline route map where direct flight lookup is needed
const airlineGraph = new GraphMatrix(5);
airlineGraph.addEdge(0, 1); // City 0 to City 1
airlineGraph.addEdge(0, 2); // City 0 to City 2
airlineGraph.addEdge(3, 4); // City 3 to City 4
console.log("Airline route map:");
airlineGraph.printMatrix();
