var sortColors = function (nums) {
  let index = 0;
  let n = nums.length;

  // Move all 0s to the front
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      index++;
    }
  }

  // Move all 1s to the correct position
  for (let i = index; i < n; i++) {
    if (nums[i] === 1) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      index++;
    }
  }

  // Remaining elements are 2s, so they are already in place
};
