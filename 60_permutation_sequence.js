function permuteUntilK(
  arr,
  k,
  start = 0,
  count = { value: 0 },
  result = { value: null }
) {
  if (result.value !== null) return; // Stop early if found

  if (start === arr.length - 1) {
    count.value += 1;
    if (count.value === k) {
      result.value = arr.slice(); // Copy the array
    }
    return;
  }

  for (let i = start; i < arr.length; i++) {
    // Swap
    [arr[start], arr[i]] = [arr[i], arr[start]];

    permuteUntilK(arr, k, start + 1, count, result);

    // Backtrack
    [arr[start], arr[i]] = [arr[i], arr[start]];

    if (result.value !== null) return; // Extra stop after returning
  }
}

// --------- User Input (Node.js) ---------

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter n (1 to 9): ", (nInput) => {
  readline.question("Enter k (1 to n!): ", (kInput) => {
    const n = parseInt(nInput);
    const k = parseInt(kInput);

    if (n < 1 || n > 9) {
      console.log("n must be between 1 and 9.");
      readline.close();
      return;
    }

    const nums = [];
    for (let i = 1; i <= n; i++) nums.push(i);

    const result = { value: null };
    permuteUntilK(nums, k, 0, { value: 0 }, result);

    if (result.value) {
      console.log(`The ${k}th permutation is: ${result.value.join("")}`);
    } else {
      console.log("Invalid k value!");
    }

    readline.close();
  });
});
