const prompt = require("prompt-sync")();
function addBinary(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry) {
    let total = carry;

    if (i >= 0) {
      total += parseInt(a[i]);
      i--;
    }

    if (j >= 0) {
      total += parseInt(b[j]);
      j--;
    }

    result = (total % 2) + result;
    carry = Math.floor(total / 2);
  }

  return result;
}

// ----------- Testing ----------
const a = prompt("Enter first binary string:");
const b = prompt("Enter second binary string:");

console.log("Sum is:", addBinary(a, b));
