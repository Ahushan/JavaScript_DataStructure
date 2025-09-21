// ===============================
// 📂 runExamples.js - Test All Data Structures
// ===============================

// Import all DS modules (adjust paths if needed)
const ArrayUtils = require("./arrayUtils.js");
const Stack = require("./stack.js");
const Queue = require("./queue.js");
const QueueLinkedList = require("./queueLinkedList.js");
const Deque = require("./deque.js");
const SinglyLinkedList = require("./singlyLinkedList.js");
const BST = require("./binarySearchTree.js");
const MinHeap = require("./minHeap.js");
const MaxHeap = require("./maxHeap.js");
const SetWrapper = require("./setWrapper.js");
const MapWrapper = require("./mapWrapper.js");
const HashMap = require("./hashMap.js");
const HashTable = require("./hashTable.js");
const Graph = require("./graph.js");
const GraphMatrix = require("./graphMatrix.js");
const Trie = require("./trie.js");
const AVLTree = require("./avlTree.js");
const RedBlackTree = require("./redBlackTree.js");
const PriorityQueue = require("./priorityQueue.js");
const DisjointSet = require("./disjointSet.js");

// ===============================
// Test Examples
// ===============================

console.log("========== ARRAY UTILS ==========");
const arr = [1, 2, 3, 4, 5];
console.log("Original array:", arr);
console.log("Sum:", ArrayUtils.sumAll(arr));

console.log("\n========== STACK ==========");
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
console.log("Pop:", stack.pop());
stack.print();

console.log("\n========== QUEUE (ARRAY) ==========");
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
console.log("Dequeue:", queue.dequeue());
queue.print();

console.log("\n========== QUEUE (LINKED LIST) ==========");
const queueLL = new QueueLinkedList();
queueLL.enqueue(10);
queueLL.enqueue(20);
queueLL.enqueue(30);
queueLL.print();
console.log("Dequeue:", queueLL.dequeue());
queueLL.print();

console.log("\n========== DEQUE ==========");
const deque = new Deque();
deque.addFront(10);
deque.addRear(20);
deque.addFront(5);
deque.print();
console.log("Remove Front:", deque.removeFront());
console.log("Remove Rear:", deque.removeRear());
deque.print();

console.log("\n========== SINGLY LINKED LIST ==========");
const sll = new SinglyLinkedList();
sll.append(10);
sll.append(20);
sll.append(30);
sll.print();
sll.insertAt(1, 15);
sll.print();
sll.removeAt(2);
sll.print();

console.log("\n========== BST ==========");
const bst = new BST();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);
bst.inorder();

console.log("\n========== MIN HEAP ==========");
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(15);
minHeap.print();
console.log("Extract Min:", minHeap.extractMin());
minHeap.print();

console.log("\n========== MAX HEAP ==========");
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(50);
maxHeap.insert(30);
maxHeap.print();
console.log("Extract Max:", maxHeap.extractMax());
maxHeap.print();

console.log("\n========== SET WRAPPER ==========");
const mySet = new SetWrapper();
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.print();
console.log("Has 20?", mySet.has(20));
mySet.remove(20);
mySet.print();

console.log("\n========== MAP WRAPPER ==========");
const myMap = new MapWrapper();
myMap.set("name", "Ahushan");
myMap.set("age", 23);
myMap.print();
console.log("Get age:", myMap.get("age"));

console.log("\n========== HASH MAP ==========");
const myHashMap = new HashMap();
myHashMap.set("name", "Ahushan");
myHashMap.set("age", 23);
myHashMap.print();
console.log("Get 'name':", myHashMap.get("name"));

console.log("\n========== HASH TABLE ==========");
const myHashTable = new HashTable();
myHashTable.set("name", "Ahushan");
myHashTable.set("age", 23);
myHashTable.print();
console.log("Get 'age':", myHashTable.get("age"));

console.log("\n========== GRAPH (ADJ LIST) ==========");
const graph = new Graph(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.print();

console.log("\n========== GRAPH (ADJ MATRIX) ==========");
const graphMatrix = new GraphMatrix(4);
graphMatrix.addEdge(0, 1);
graphMatrix.addEdge(0, 2);
graphMatrix.addEdge(1, 2);
graphMatrix.addEdge(2, 3);
graphMatrix.printMatrix();

console.log("\n========== TRIE ==========");
const trie = new Trie();
trie.insert("hello");
trie.insert("hi");
trie.insert("helium");
trie.printAllWords();

console.log("\n========== AVL TREE ==========");
const avl = new AVLTree();
avl.insert(30);
avl.insert(20);
avl.insert(40);
avl.insert(10);
avl.insert(25);
avl.printInorder();

console.log("\n========== RED-BLACK TREE ==========");
const rb = new RedBlackTree();
rb.insert(10);
rb.insert(20);
rb.insert(30);
rb.insert(15);
rb.printInorder();

console.log("\n========== PRIORITY QUEUE ==========");
const pq = new PriorityQueue();
pq.enqueue("Task A", 3);
pq.enqueue("Task B", 1);
pq.enqueue("Task C", 2);
pq.print();
console.log("Dequeue:", pq.dequeue());
pq.print();

console.log("\n========== DISJOINT SET ==========");
const ds = new DisjointSet(5);
ds.union(0, 1);
ds.union(1, 2);
ds.union(3, 4);
ds.print();
console.log("Are 0 and 2 connected?", ds.connected(0, 2));
console.log("Are 0 and 4 connected?", ds.connected(0, 4));
