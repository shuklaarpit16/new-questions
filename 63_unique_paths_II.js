const prompt = require("prompt-sync")();
function uniquePathsWithObstacles(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const paths = []; // To store all valid paths

  function backtrack(x, y, path) {
    if (x >= m || y >= n || obstacleGrid[x][y] === 1) {
      return;
    }

    if (x === m - 1 && y === n - 1) {
      paths.push([...path]);
      return;
    }

    path.push("Right");
    backtrack(x, y + 1, path);
    path.pop();

    path.push("Down");
    backtrack(x + 1, y, path);
    path.pop();
  }

  if (obstacleGrid[0][0] === 1) {
    console.log("Output: 0");
    return;
  }

  backtrack(0, 0, []);

  console.log(`Output: ${paths.length}\n`);
  paths.forEach((p, i) => {
    console.log(`${i + 1}. ${p.join(" -> ")}`);
  });
}

// ---------- Example Input ----------

const input = prompt("Input (Example: [[0,0,0],[0,1,0],[0,0,0]]): ");

try {
  const obstacleGrid = JSON.parse(input);

  if (
    !Array.isArray(obstacleGrid) ||
    !obstacleGrid.every((row) => Array.isArray(row))
  ) {
    throw new Error("Invalid input! Please enter a valid 2D array.");
  }

  uniquePathsWithObstacles(obstacleGrid);
} catch (e) {
  console.log("Invalid input! Please enter a valid 2D array.");
}
