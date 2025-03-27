function lengthOfLastWord(s) {
  let length = 0;
  let i = s.length - 1;

  // Step 1: If the last character is a space, return 0
  if (s.length > 0 && s[s.length - 1] === " ") {
    return 0;
  }

  // Step 2: Move backwards and count the last word
  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }

  return length;
}

// ---------- User Input (for Node.js) ----------
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter the sentence: ", (s) => {
  console.log("Length of last word is:", lengthOfLastWord(s));
  readline.close();
});
