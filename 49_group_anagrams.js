function groupAnagrams(strs) {
  let result = []; // To store the groups
  let used = new Array(strs.length).fill(false); // To mark which words are already grouped

  for (let i = 0; i < strs.length; i++) {
    if (!used[i]) {
      let group = [strs[i]]; // Start a new group with the current word
      used[i] = true;
      for (let j = i + 1; j < strs.length; j++) {
        if (!used[j]) {
          // Compare if both words are anagrams by comparing sorted versions
          if (
            strs[i].split("").sort().join("") ===
            strs[j].split("").sort().join("")
          ) {
            group.push(strs[j]);
            used[j] = true;
          }
        }
      }
      result.push(group); // Add the formed group to the result
    }
  }

  return result;
}

// -------- User Input --------

// Using prompt() will work in browsers, in Node.js you need readline
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter words separated by space: ", (input) => {
  const inputStrs = input.trim().split(" ");
  console.log("\nGrouped Anagrams:");
  console.log(groupAnagrams(inputStrs));
  readline.close();
});
