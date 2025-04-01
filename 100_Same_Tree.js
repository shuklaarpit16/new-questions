/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // If both trees are empty, they are the same
  if (!p && !q) return true;

  // If one tree is empty and the other is not, they are not the same
  if (!p || !q) return false;

  // Check if the current nodes have the same value
  if (p.val !== q.val) return false;

  // Recursively check left and right subtrees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
