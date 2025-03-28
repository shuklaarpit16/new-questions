const prompt = require("prompt-sync")();
function climbStairs(n) {
  const paths = [];

  function backtrack(current, path) {
    if (current === n) {
      paths.push([...path]);
      return;
    }
    if (current > n) {
      return;
    }

    // Move 1 step
    path.push(current + 1);
    backtrack(current + 1, path);
    path.pop();

    // Move 2 steps
    path.push(current + 2);
    backtrack(current + 2, path);
    path.pop();
  }

  backtrack(0, []);

  console.log(
    `There are ${paths.length} distinct ways you can climb to the top.`
  );
  for (let p of paths) {
    console.log(p.join(" → "));
  }
}

// ----------- User Input -----------

// You can test directly by changing n below
const n = parseInt(prompt("Enter the number of stairs (n):"));

if (n > 0) {
  climbStairs(n);
} else {
  console.log("n must be a positive integer.");
}
