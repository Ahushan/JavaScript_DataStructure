// runExamples.js
const { SumAll } = require("../src/arrays/arrayUtils.js")
const { Stack } = require("../src/stack/stack.js");
const { Queue } = require("../src/queue/queue.js");
const { QueueLinkedList } = require("../src/queue/queueLinkedList.js");
const { Deque } = require("../src/queue/deque.js");
const { SinglyLinkedList } = require("../src/linkedlist/singlyLinkedList.js");
const { BinarySearchTree } = require("../src/tree/binarySearchTree.js");
const { MinHeap } = require("../src/heap/minHeap.js");
const { MaxHeap } = require("../src/heap/maxHeap.js");
const { SetWrapper } = require("../src/set/setWrapper.js");
const { MapWrapper } = require("../src/hash_map_table/mapWrapper.js");
const { HashMap } = require("../src/hash_map_table/hashMap.js");
const { HashTable } = require("../src/hash_map_table/hashTable.js");
const { Graph } = require("../src/graph/graph.js");
const { GraphMatrix } = require("../src/graph/graphMatrix.js");
const { Trie } = require("../src/tree/trie.js");
const { AVLTree } = require("../src/tree/avlTree.js");
const { RedBlackTree } = require("../src/tree/redBlackTree.js");
const { PriorityQueue } = require("../src/advance_ds/priorityQueue.js");
const { DisjointSet } = require("../src/advance_ds/disjointSet.js");

const greenBoldText = '\x1b[1m\x1b[32m';
const reset = '\x1b[0m';
const redBoldText = '\x1b[1m\x1b[31m';
const border = '\x1b[32m===========================================================================\x1b[0m';

console.log(border);
console.log(`${redBoldText}\t\t  DATA STRUCTURES EXAMPLES RUNNER ${reset}`);
console.log(border);

// Test Examples
console.log(`\n${greenBoldText}\t\t\t  ARRAY ${reset}`);
const arr = [1, 2, 3, 4, 5];
console.log("Original array:", arr);
console.log("Sum:", SumAll(arr));

console.log(`\n${greenBoldText}\t\t\t  STACK ${reset}`);
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
console.log("Pop:", stack.pop());
stack.print();


const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
console.log("Dequeue:", queue.dequeue());
queue.print();

console.log(`\n${greenBoldText}\t\t\t  QUEUE (LINKED LIST) ${reset}`);
const queueLL = new QueueLinkedList();
queueLL.enqueue(10);
queueLL.enqueue(20);
queueLL.enqueue(30);
queueLL.print();
console.log("Dequeue:", queueLL.dequeue());
queueLL.print();

console.log(`\n${greenBoldText}\t\t\t  DEQUE ${reset}`);
const deque = new Deque();
deque.addFront(10);
deque.addRear(20);
deque.addFront(5);
deque.print();
console.log("Remove Front:", deque.removeFront());
console.log("Remove Rear:", deque.removeRear());
deque.print();

console.log(`\n${greenBoldText}\t\t\t  SINGLY LINKED LIST ${reset}`);
const sll = new SinglyLinkedList();
sll.append(10);
sll.append(20);
sll.append(30);
sll.print();
sll.insertAt(1, 15);
sll.print();
sll.removeAt(2);
sll.print();

console.log(`\n${greenBoldText}\t\t\t  BST ${reset}`);
const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);
bst.inorder();

console.log(`\n${greenBoldText}\n\t\t\t  MIN HEAP ${reset}`);
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(15);
minHeap.print();
console.log("Extract Min:", minHeap.extractMin());
minHeap.print();

console.log(`\n${greenBoldText}\n\t\t\t  MAX HEAP ${reset}`);
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(50);
maxHeap.insert(30);
maxHeap.print();
console.log("Extract Max:", maxHeap.extractMax());
maxHeap.print();

console.log(`\n${greenBoldText}\n\t\t\t  SET WRAPPER ${reset}`);
const mySet = new SetWrapper();
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.print();
console.log("Has 20?", mySet.has(20));
mySet.remove(20);
mySet.print();

console.log(`\n${greenBoldText}\n\t\t\t  MAP WRAPPER ${reset}`);
const myMap = new MapWrapper();
myMap.set("name", "Ahushan");
myMap.set("age", 23);
myMap.print();
console.log("Get age:", myMap.get("age"));

console.log(`\n${greenBoldText}\n\t\t\t  HASH MAP ${reset}`);
const myHashMap = new HashMap();
myHashMap.set("name", "Ahushan");
myHashMap.set("age", 23);
myHashMap.print();
console.log("Get 'name':", myHashMap.get("name"));

console.log(`\n${greenBoldText}\n\t\t\t  HASH TABLE ${reset}`);
const myHashTable = new HashTable();
myHashTable.set("name", "Ahushan");
myHashTable.set("age", 23);
myHashTable.print();
console.log("Get 'age':", myHashTable.get("age"));

console.log(`\n${greenBoldText}\n\t\t\t  GRAPH (ADJ LIST) ${reset}`);
const graph = new Graph(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.printGraph();

console.log(`\n${greenBoldText}\n\t\t\t  GRAPH (ADJ MATRIX) ${reset}`);
const graphMatrix = new GraphMatrix(4);
graphMatrix.addEdge(0, 1);
graphMatrix.addEdge(0, 2);
graphMatrix.addEdge(1, 2);
graphMatrix.addEdge(2, 3);
graphMatrix.printMatrix();

console.log(`\n${greenBoldText}\n\t\t\t  TRIE ${reset}`);
const trie = new Trie();
trie.insert("hello");
trie.insert("hi");
trie.insert("helium");
trie.printAllWords();

console.log("\n\t\t\t  AVL TREE ");
const avl = new AVLTree();
avl.insert(30);
avl.insert(20);
avl.insert(40);
avl.insert(10);
avl.insert(25);
avl.printInorder();

console.log(`\n${greenBoldText}\n\t\t\t  RED-BLACK TREE ${reset}`);
const rb = new RedBlackTree();
rb.insert(10);
rb.insert(20);
rb.insert(30);
rb.insert(15);
rb.printInorder();

console.log(`\n${greenBoldText}\n\t\t\t  PRIORITY QUEUE ${reset}`);
const pq = new PriorityQueue();
pq.enqueue("Task A", 3);
pq.enqueue("Task B", 1);
pq.enqueue("Task C", 2);
pq.print();
console.log("Dequeue:", pq.dequeue());
pq.print();

console.log(`\n${greenBoldText}\n\t\t\t  DISJOINT SET ${reset}`);
const ds = new DisjointSet(5);
ds.union(0, 1);
ds.union(1, 2);
ds.union(3, 4);
ds.print();
console.log("Are 0 and 2 connected?", ds.connected(0, 2));
console.log("Are 0 and 4 connected?", ds.connected(0, 4));
