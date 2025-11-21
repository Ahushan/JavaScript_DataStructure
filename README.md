# JavaScript Data Structures - Complete Guide

This repository contains **Data Structures implemented in JavaScript**, including **core** and **advanced DS**.  
Each section includes:

- Definition / Concept  
- Operations & Big O  
- Where to Use  
- Pros / Cons / Recommendations  

---

## **1. Arrays**

**Definition:**  
An array is a collection of elements stored in contiguous memory locations. Elements can be accessed via index.

**Operations & Big O:**

| Operation      | Complexity |
|----------------|------------|
| Access         | O(1)       |
| Search         | O(n)       |
| Insert (end)   | O(1)       |
| Insert (any)   | O(n)       |
| Delete         | O(n)       |

**Where to Use:**  
- Fast index access, storing lists  
- Implementing stacks, queues  

**Pros / Cons / Recommendation:**  
- ✅ Pros: Simple, fast access by index  
- ❌ Cons: Costly insert/delete at arbitrary positions  
- 💡 Use for: Small/medium lists, index-based access  

---

## **2. Stack (LIFO)**

**Definition:**  
A stack is a linear data structure where insertion and deletion happen at **one end (top)**. Follows **Last-In-First-Out**.

**Operations & Big O:**

| Operation  | Complexity |
|------------|------------|
| Push       | O(1)       |
| Pop        | O(1)       |
| Peek/Top   | O(1)       |
| Search     | O(n)       |

**Where to Use:**  
- Undo/Redo functionality  
- Function call stacks  
- Expression evaluation (postfix/prefix)

**Pros / Cons / Recommendation:**  
- ✅ Pros: Simple, fast  
- ❌ Cons: Access limited to top  
- 💡 Use when LIFO order is required  

---

## **3. Queue (FIFO)**

**Definition:**  
A queue is a linear data structure where insertion happens at the **rear** and deletion at the **front**. Follows **First-In-First-Out**.

**Operations & Big O:**

| Operation      | Complexity |
|----------------|------------|
| Enqueue        | O(1)       |
| Dequeue        | O(1)       |
| Peek/Front     | O(1)       |
| Search         | O(n)       |

**Where to Use:**  
- Task scheduling  
- BFS traversal  
- Job queues  

**Pros / Cons / Recommendation:**  
- ✅ Pros: Maintains order  
- ❌ Cons: Access to middle elements costly  
- 💡 Use FIFO when order matters  

---

## **4. Linked List**

**Definition:**  
A linked list is a linear data structure where each node contains data and a pointer to the next node. Memory is dynamically allocated.

**Operations & Big O:**

| Operation        | Complexity |
|-----------------|------------|
| Access (by index)| O(n)       |
| Search           | O(n)       |
| Insert (head)    | O(1)       |
| Insert (any)     | O(n)       |
| Delete           | O(n)       |

**Where to Use:**  
- Frequent insert/delete operations  
- Implementing stacks, queues, adjacency lists  

**Pros / Cons / Recommendation:**  
- ✅ Pros: Dynamic size, efficient at ends  
- ❌ Cons: Slow index access, extra memory  
- 💡 Use for: Dynamic data where frequent insertion/deletion occurs  

---

## **5. Binary Search Tree (BST)**

**Definition:**  
A BST is a binary tree where **left < parent < right**. Efficient for sorted data search.

**Operations & Big O:**

| Operation      | Avg Case | Worst Case |
|----------------|----------|------------|
| Search         | O(log n) | O(n)       |
| Insert         | O(log n) | O(n)       |
| Delete         | O(log n) | O(n)       |

**Where to Use:**  
- Searching and sorting  
- Implementing sets/maps  
- Database indexing  

**Pros / Cons / Recommendation:**  
- ✅ Pros: Fast search/insert if balanced  
- ❌ Cons: Unbalanced → O(n)  
- 💡 Use AVL/Red-Black Tree for guaranteed balance  

---

## **6. Hash Table / Map**

**Definition:**  
A hash table stores key-value pairs using a hash function. Allows **fast insert, delete, and lookup**.

**Operations & Big O:**

| Operation      | Avg Case | Worst Case |
|----------------|----------|------------|
| Insert         | O(1)     | O(n)       |
| Delete         | O(1)     | O(n)       |
| Search         | O(1)     | O(n)       |

**Where to Use:**  
- Key-value lookups  
- Caching, frequency counting  

**Pros / Cons / Recommendation:**  
- ✅ Pros: Fast access  
- ❌ Cons: Collisions, extra memory  
- 💡 Use Map/Hash Table when unique key-value lookup is needed  

---

## **7. Heap (Min/Max)**

**Definition:**  
A heap is a complete binary tree maintaining heap property:  
- Min-Heap: parent ≤ children  
- Max-Heap: parent ≥ children  

**Operations & Big O:**

| Operation        | Complexity |
|-----------------|------------|
| Insert           | O(log n)   |
| Extract Min/Max  | O(log n)   |
| Peek             | O(1)       |

**Where to Use:**  
- Priority queues  
- Heap sort  
- Median of stream  

**Pros / Cons / Recommendation:**  
- ✅ Pros: Efficient priority retrieval  
- ❌ Cons: Not suited for search  
- 💡 Use for scheduling, top-k queries  

---

## **8. Advanced Trees (AVL / Red-Black)**

**Definition:**  
Self-balancing BSTs that maintain height balance to guarantee O(log n) operations.

**Where to Use:**  
- Database indices  
- Real-time ordered data  

**Pros / Cons / Recommendation:**  
- ✅ Pros: Guaranteed balance  
- ❌ Cons: More complex than normal BST  
- 💡 Use AVL for read-heavy, Red-Black for frequent insert/delete  

---

## **9. Graphs**

**Definition:**  
A graph is a collection of nodes connected by edges. Can be directed/undirected, weighted/unweighted.

**Operations & Big O:**

| Representation    | Space      | Edge Lookup |
|------------------|-----------|------------|
| Adjacency List   | O(V + E)  | O(V)       |
| Adjacency Matrix | O(V^2)    | O(1)       |

**Where to Use:**  
- Social networks  
- Maps / Routes  
- Dependency graphs  

**Pros / Cons / Recommendation:**  
- Adjacency List: Efficient for sparse graphs  
- Adjacency Matrix: Fast edge check for dense graphs  

---

## **10. Disjoint Set / Union-Find**

**Definition:**  
Tracks disjoint sets with union/find operations. Supports **path compression** & **union by rank**.

**Operations & Big O:**  
- Find / Union: O(α(n)) (almost constant)  

**Where to Use:**  
- Kruskal’s MST  
- Connected components  
- Grouping  

**Pros / Cons / Recommendation:**  
- ✅ Pros: Efficient component tracking  
- ❌ Cons: Complex implementation  
- 💡 Use in MST, clustering, grouping problems  

---

## **Quick Recommendation Table**

| DS              | Best Use Case               | Recommended When         |
|-----------------|-----------------------------|--------------------------|
| Array           | Indexed access              | Small/medium lists       |
| Linked List     | Frequent insert/delete      | Dynamic memory usage     |
| Stack/Queue     | LIFO/FIFO                   | Undo, scheduling         |
| BST             | Ordered data, search-heavy  | Balanced tree preferred  |
| Hash Table/Map  | Key-value lookup            | Fast access required     |
| Heap            | Priority management         | Top-k, scheduling        |
| AVL / RB Tree   | Balanced search/insert      | Real-time DB indexing    |
| Graph           | Relationships/networks      | BFS/DFS, paths           |
| Disjoint Set    | Component tracking          | MST, clustering          |

## **FULL SUMMARY — “Which DS exist in JS, which don’t?”

+-------------------+-------------------------------+-------------------------------+
| Data Structure    | Best Use Case                | Recommended When              |
+-------------------+-------------------------------+-------------------------------+
| Array             | Indexed access, fast reads    | Small/medium lists, random    |
|                   |                               | access needed                 |
+-------------------+-------------------------------+-------------------------------+
| Linked List       | Frequent insert/delete        | Dynamic growing data,         |
|                   | in middle                     | minimal random access         |
+-------------------+-------------------------------+-------------------------------+
| Stack             | LIFO operations               | Undo/redo, call stack,        |
|                   |                               | parsing                       |
+-------------------+-------------------------------+-------------------------------+
| Queue             | FIFO operations               | Scheduling, task queues, BFS  |
+-------------------+-------------------------------+-------------------------------+
| BST               | Ordered data + searching      | When sorted data needed       |
| (Unbalanced)      |                               | but low insertion/deletion    |
+-------------------+-------------------------------+-------------------------------+
| AVL / RB Tree     | Balanced search + fast ops    | Real-time indexing, databases |
|                   | (O(log n) guaranteed)         | or when worst-case matters    |
+-------------------+-------------------------------+-------------------------------+
| Hash Table / Map  | Key-value fast lookup         | Fast access, caching, hashing |
|                   | Avg O(1)                      | operations                    |
+-------------------+-------------------------------+-------------------------------+
| Heap (Min/Max)    | Retrieve highest/lowest item  | Priority Queue, scheduling,   |
|                   | fast                          | Dijkstra (priority ops)       |
+-------------------+-------------------------------+-------------------------------+
| Trie              | Fast prefix checks            | Autocomplete, dictionaries,   |
|                   |                               | word search                   |
+-------------------+-------------------------------+-------------------------------+
| Graph             | Relationship modeling         | BFS/DFS, shortest paths,      |
|                   | (nodes + edges)               | networks, maps                |
+-------------------+-------------------------------+-------------------------------+
| Disjoint Set      | Group/cluster tracking        | MST (Kruskal), connected      |
| (Union–Find)      | Fast unions/finds             | components, cycle detection   |
+-------------------+-------------------------------+-------------------------------+
