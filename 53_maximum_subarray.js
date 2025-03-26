function maxSubarraySum(arr) {
  let maxSum = -Infinity; // Initialize to negative infinity
  let n = arr.length;

  for (let start = 0; start < n; start++) {
    let currentSum = 0;
    for (let end = start; end < n; end++) {
      currentSum += arr[end];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
}

// Taking user input
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter array elements separated by space: ", (input) => {
  let arr = input.split(" ").map(Number); // Convert input to an array of numbers
  console.log("Maximum subarray sum:", maxSubarraySum(arr));
  rl.close();
});
