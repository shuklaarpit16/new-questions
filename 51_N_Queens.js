const prompt = require("prompt-sync")({ sigint: true });

function solveNQueens(n) {
  function isSafe(board, row, col, n) {
    // Check vertical
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") {
        return false;
      }
    }

    // Check diagonal left
    let i = row,
      j = col;
    while (i >= 0 && j >= 0) {
      if (board[i][j] === "Q") {
        return false;
      }
      i--;
      j--;
    }

    // Check diagonal right
    (i = row), (j = col);
    while (i >= 0 && j < n) {
      if (board[i][j] === "Q") {
        return false;
      }
      i--;
      j++;
    }

    return true;
  }

  function solve(board, row, n, solutions) {
    if (row === n) {
      solutions.push(board.map((r) => r.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(board, row, col, n)) {
        board[row][col] = "Q";
        solve(board, row + 1, n, solutions);
        board[row][col] = ".";
      }
    }
  }

  let board = Array.from({ length: n }, () => Array(n).fill("."));
  let solutions = [];
  solve(board, 0, n, solutions);

  return solutions;
}

// Taking user input
const n = parseInt(prompt("Enter the value of n: "), 10);
const solutions = solveNQueens(n);

// Print output in the required format
console.log(`\nTotal unique solutions = ${solutions.length}`);
solutions.forEach((sol) => {
  console.log(sol);
  console.log();
});
//I have delete the mirror feature from this program as it was giving wrong output.
