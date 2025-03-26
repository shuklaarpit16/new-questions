function canJump(nums) {
  function canReachEnd(arr) {
    let maxReach = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i > maxReach) return false;
      maxReach = Math.max(maxReach, i + arr[i]);
      if (maxReach >= arr.length - 1) return true;
    }
    return false;
  }

  if (canReachEnd(nums)) return true;

  let queue = [nums];
  let seen = new Set();

  while (queue.length > 0) {
    let arr = queue.shift();
    let key = arr.join(",");

    if (seen.has(key)) continue;
    seen.add(key);

    for (let i = 1; i <= arr[0]; i++) {
      let newArr = arr.slice(i);
      let newKey = newArr.join(",");

      if (newArr.length > 0 && !seen.has(newKey)) {
        if (canReachEnd(newArr)) return true;
        queue.push(newArr);
      }
    }
  }

  return false;
}

// Taking user input
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Enter a list of non-negative integers separated by spaces: ",
  (input) => {
    let nums = input.split(" ").map(Number);

    // Validate input
    if (nums.some((n) => isNaN(n) || n < 0)) {
      console.log("Invalid input: All numbers must be non-negative integers.");
    } else if (nums.length === 0) {
      console.log("Invalid input: The list cannot be empty.");
    } else {
      console.log(canJump(nums));
    }

    rl.close();
  }
);
