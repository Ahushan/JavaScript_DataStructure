
// * graph.js - Graph (Adjacency List)


// 1. Syntax for Graph
// A graph is a collection of vertices (nodes) and edges (connections between nodes).
// Adjacency list stores a list of neighbors for each vertex.

// Class implementation
class Graph {
  constructor() {
    this.adjList = new Map(); // key: vertex, value: array of neighbors
  }

  // 2. Initialization & Declaration
  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(v1, v2) {
    if (!this.adjList.has(v1)) this.addVertex(v1);
    if (!this.adjList.has(v2)) this.addVertex(v2);
    this.adjList.get(v1).push(v2);
    this.adjList.get(v2).push(v1); // For undirected graph
  }

  // 3. Basic Operations

  // Display graph
  printGraph() {
    for (let [vertex, neighbors] of this.adjList.entries()) {
      console.log(`${vertex} -> ${neighbors.join(", ")}`);
    }
  }

  // Depth-First Search (DFS)
  dfs(start) {
    const visited = new Set();
    const result = [];

    const dfsHelper = (vertex) => {
      visited.add(vertex);
      result.push(vertex);
      for (let neighbor of this.adjList.get(vertex)) {
        if (!visited.has(neighbor)) dfsHelper(neighbor);
      }
    };

    dfsHelper(start);
    return result;
  }

  // Breadth-First Search (BFS)
  bfs(start) {
    const visited = new Set();
    const queue = [];
    const result = [];

    visited.add(start);
    queue.push(start);

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      for (let neighbor of this.adjList.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    return result;
  }
}

// Example Initialization
const graph = new Graph();

// Adding vertices and edges
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.addEdge("C", "D");

console.log("Graph adjacency list:");
graph.printGraph();

// DFS
console.log("DFS from A:", graph.dfs("A"));

// BFS
console.log("BFS from A:", graph.bfs("A"));

// 4. Usage Comments
// Graphs are used to represent networks and relationships.  
// Adjacency list is memory-efficient for sparse graphs.

// 5. Pros & Cons
// Pros: Efficient storage for sparse graphs, easy to traverse neighbors.  
// Cons: Accessing an edge can take O(V) in adjacency list.  
// For dense graphs, adjacency matrix may be faster.

// 6. Where to Use
// - Social networks (friend connections).  
// - Maps & navigation (roads, paths).  
// - Network routing algorithms.  
// - Dependency resolution (package managers).

// 7. Real-World Example
// Example: Social network friend suggestions
const socialGraph = new Graph();
socialGraph.addEdge("Alice", "Bob");
socialGraph.addEdge("Alice", "Charlie");
socialGraph.addEdge("Bob", "David");
socialGraph.addEdge("Charlie", "Eve");

console.log("Social Network connections:");
socialGraph.printGraph();
console.log("DFS starting from Alice:", socialGraph.dfs("Alice"));
console.log("BFS starting from Alice:", socialGraph.bfs("Alice"));

module.exports = { Graph };