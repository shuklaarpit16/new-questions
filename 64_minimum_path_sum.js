const prompt = require("prompt-sync")();
function minPathSum(grid) {
  const m = grid.length;
  const n = grid[0].length;

  let minSum = Infinity;
  let minPath = [];

  function backtrack(x, y, currentSum, path) {
    if (x >= m || y >= n) return;

    currentSum += grid[x][y];
    path.push(grid[x][y]);

    // If reached bottom-right corner
    if (x === m - 1 && y === n - 1) {
      if (currentSum < minSum) {
        minSum = currentSum;
        minPath = [...path]; // copy the path
      }
      path.pop();
      return;
    }

    // Move Right
    backtrack(x, y + 1, currentSum, path);
    // Move Down
    backtrack(x + 1, y, currentSum, path);

    // Backtrack
    path.pop();
  }

  backtrack(0, 0, 0, []);

  console.log("Minimum Path Sum:", minSum);
  console.log("Path is:", minPath.join(" → "));
}

// ---------- User Input ----------
const input = prompt("Enter the grid (e.g. [[1,3,1],[1,5,1],[4,2,1]]): ");

try {
  const grid = JSON.parse(input);
  if (
    !Array.isArray(grid) ||
    !grid.every(
      (row) =>
        Array.isArray(row) &&
        row.every((num) => Number.isInteger(num) && num >= 0)
    )
  ) {
    throw new Error();
  }
  minPathSum(grid);
} catch {
  console.log(
    "Invalid input! Please enter a valid 2D grid with non-negative integers."
  );
}
