/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let memo = new Map();

  function countTrees(nodes) {
    if (nodes <= 1) {
      return 1;
    }
    if (memo.has(nodes)) {
      return memo.get(nodes);
    }

    let total = 0;
    for (let root = 1; root <= nodes; root++) {
      let leftTrees = countTrees(root - 1);
      let rightTrees = countTrees(nodes - root);
      total += leftTrees * rightTrees;
    }

    memo.set(nodes, total);
    return total;
  }

  return countTrees(n);
};

// Example usage:
console.log(numTrees(3)); // Output: 5
