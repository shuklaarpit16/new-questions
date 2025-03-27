function uniquePaths(m, n) {
  if (m > 100 || n > 100) {
    console.log("Error: m and n must be at most 100.");
    return 0;
  }

  let count = 0; // To count all valid paths

  function backtrack(x, y) {
    // If we reached bottom-right corner
    if (x === m - 1 && y === n - 1) {
      count++;
      return;
    }

    // Move Right if possible
    if (x + 1 < m) {
      backtrack(x + 1, y);
    }

    // Move Down if possible
    if (y + 1 < n) {
      backtrack(x, y + 1);
    }
  }

  // Start from (0, 0) top-left corner
  backtrack(0, 0);
  return count;
}

// ----------- User Input (for Node.js) -----------

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter number of columns (m): ", (mInput) => {
  readline.question("Enter number of rows (n): ", (nInput) => {
    const m = parseInt(mInput);
    const n = parseInt(nInput);

    console.log();

    if (m <= 100 && n <= 100) {
      console.log("Total Unique Paths:", uniquePaths(m, n));
    } else {
      console.log("Invalid input! Both m and n must be at most 100.");
    }

    readline.close();
  });
});
