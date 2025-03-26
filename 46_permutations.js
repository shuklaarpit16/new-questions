function permute(arr, start = 0) {
  if (start === arr.length - 1) {
    // Base case: when start reaches the last index
    console.log(arr.join(" ")); // Print permutation as a string
    return;
  }

  for (let i = start; i < arr.length; i++) {
    // Swap elements at start and i
    [arr[start], arr[i]] = [arr[i], arr[start]];

    // Recurse with the next index
    permute(arr, start + 1);

    // Backtrack (undo the swap)
    [arr[start], arr[i]] = [arr[i], arr[start]];
  }
}

// Taking user input
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter numbers separated by spaces: ", (input) => {
  const nums = input.split(" ").map(Number); // Convert input to an array of numbers
  permute(nums);
  rl.close();
});
