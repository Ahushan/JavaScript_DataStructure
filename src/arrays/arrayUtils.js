// arrayUtils.js - Array Helpers

// 1. Syntax for Array
// In JavaScript, an array is declared using square brackets []
// Example: let arr = [1, 2, 3, 4];

// 2. Initialization & Declaration
let arr = [10, 20, 30, 40];
let emptyArr = []; // empty array

// 3. Basic Operations

// Accessing elements
console.log("First element:", arr[0]);
console.log("Last element:", arr[arr.length - 1]);

// Adding elements
arr.push(50); // adds at end
arr.unshift(5); // adds at start

// Removing elements
arr.pop(); // removes last
arr.shift(); // removes first

// Iterating (looping through array)
arr.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// Searching
console.log("Index of 30:", arr.indexOf(30));

// Filtering
let filtered = arr.filter(num => num > 15);
console.log("Filtered > 15:", filtered);

// Mapping
let doubled = arr.map(num => num * 2);
console.log("Doubled:", doubled);

// Reducing function export (sum)
const SumAll = (arr) => arr.reduce((acc, num) => acc + num, 0);
console.log("Sum of all elements:", SumAll(arr));


// 4. Usage Comments
// Arrays are best for ordered data storage where index-based access is needed.

// 5. Pros & Cons
// Pros: Fast access by index (O(1)), flexible size, built-in methods.
// Cons: Insertion/removal at middle is costly (O(n)), memory overhead compared to linked lists.

// 6. Where to Use
// - Storing lists of items (products, users, scores).
// - Quick lookups by index.
// - Iterating over ordered collections.

// 7. Real-World Example
// Example: Shopping cart system
let shoppingCart = ["Milk", "Eggs", "Bread"];

// Add an item
shoppingCart.push("Butter");

// Remove an item
shoppingCart.splice(shoppingCart.indexOf("Eggs"), 1);

// Display cart
console.log("Shopping Cart:", shoppingCart);

module.exports = { SumAll };