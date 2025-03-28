const prompt = require("prompt-sync")();
function myPow(x, n) {
  // If n is negative, take reciprocal and make n positive
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let result = 1.0;

  // Multiply x, n times
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

// -------- User Input --------

// For browser use
let x = parseFloat(prompt("Enter the value of x:"));
let n = parseInt(prompt("Enter the value of n:"));

console.log("Output:", myPow(x, n));
