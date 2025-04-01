var subsetsWithDup = function (nums) {
  const res = [];
  nums.sort(); // Sort to handle duplicates easily
  backtrack(nums, 0, [], res);
  return res;
};

function backtrack(nums, index, path, res) {
  res.push([...path]); // Add a copy of path to result
  for (let i = index; i < nums.length; i++) {
    if (i > index && nums[i] === nums[i - 1]) {
      // Skip duplicates
      continue;
    }
    path.push(nums[i]);
    backtrack(nums, i + 1, path, res);
    path.pop(); // Backtrack
  }
}

// Example usage:
console.log(subsetsWithDup([1, 2, 2])); // Output: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]
