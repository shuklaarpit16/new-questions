/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];

  function backtrack(start, path) {
    // Add the current subset to the result
    result.push([...path]);

    // Iterate through the remaining numbers
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  // Start backtracking with an empty path
  backtrack(0, []);
  return result;
};
