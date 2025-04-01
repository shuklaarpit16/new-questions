/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  function validate(node, low = -Infinity, high = Infinity) {
    if (!node) return true; // Empty node is valid

    if (node.val <= low || node.val >= high) {
      return false; // Violates BST property
    }

    return (
      validate(node.left, low, node.val) && validate(node.right, node.val, high)
    );
  }

  return validate(root);
};
