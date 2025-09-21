// ===============================
// 📂 trie.js - Trie / Prefix Tree
// ===============================

// 1. Syntax for Trie
// A Trie stores strings (words) as a tree of characters.
// Each node represents a character, with a flag to mark end of word.

class TrieNode {
  constructor() {
    this.children = {}; // key: character, value: TrieNode
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // 2. Initialization & Declaration
  // root node is empty
  isEmpty() {
    return Object.keys(this.root.children).length === 0;
  }

  // 3. Basic Operations

  // Insert a word
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) node.children[char] = new TrieNode();
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  // Search for a word
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  // Check if any word starts with prefix
  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }

  // Print all words (DFS)
  printAllWords(node = this.root, prefix = "") {
    if (node.isEndOfWord) console.log(prefix);
    for (let char in node.children) {
      this.printAllWords(node.children[char], prefix + char);
    }
  }
}

// Example Initialization
const trie = new Trie();
trie.insert("hello");
trie.insert("hi");
trie.insert("helium");

console.log("Search 'hi':", trie.search("hi"));       // true
console.log("Search 'hey':", trie.search("hey"));     // false
console.log("Starts with 'he':", trie.startsWith("he")); // true

console.log("All words in Trie:");
trie.printAllWords();

// 4. Usage Comments
// Trie efficiently stores and retrieves strings, especially for prefix search.

// 5. Pros & Cons
// Pros: Fast search, prefix-based operations, O(L) for word of length L.
// Cons: Can consume a lot of memory for large alphabets or many words.

// 6. Where to Use
// - Autocomplete / suggestion engines
// - Spell-checkers
// - IP routing / dictionary implementations

// 7. Real-World Example
// Example: Autocomplete for search bar
const searchTrie = new Trie();
searchTrie.insert("apple");
searchTrie.insert("app");
searchTrie.insert("application");
searchTrie.insert("banana");

console.log("Autocomplete for 'app':");
searchTrie.printAllWords(searchTrie.root.children['a'].children['p']);
