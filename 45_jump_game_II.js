const prompt = require("prompt-sync")();
function minJumpsToEnd(nums) {
  let n = nums.length;
  if (n <= 1) return 0; // Already at the last index

  let queue = [[0, 0]]; // [current index, jumps]
  let visited = new Set(); // To avoid revisiting indexes

  while (queue.length > 0) {
    let [index, jumps] = queue.shift();

    // Explore all possible jumps from the current index
    for (let step = 1; step <= nums[index]; step++) {
      let newIndex = index + step;

      if (newIndex >= n - 1) return jumps + 1; // Reached last index

      if (!visited.has(newIndex)) {
        visited.add(newIndex);
        queue.push([newIndex, jumps + 1]);
      }
    }
  }

  return -1; // If it's not possible to reach the last index
}

// Function to take user input and validate constraints
function getUserInput() {
  let input = prompt("Enter space-separated numbers:");
  let nums = input.split(" ").map(Number);

  // Validate constraints
  if (nums.length < 1 || nums.length > 1000) {
    console.log("Length of the array must be between 1 and 1000.");
    return;
  }
  if (nums.some((num) => num < 0 || num > 100000)) {
    console.log("Each number must be between 0 and 100000.");
    return;
  }

  let result = minJumpsToEnd(nums);
  console.log("Minimum jumps needed:", result);
}

// Call function to take input and compute result
getUserInput();
