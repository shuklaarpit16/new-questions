// Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var inorderTraversal = function (root) {
  let result = [];
  let stack = [];
  let current = root;

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left; // Move to left child
    }

    current = stack.pop(); // Visit node
    result.push(current.val);

    current = current.right; // Move to right child
  }

  return result;
};
