var exist = function (board, word) {
  const m = board.length,
    n = board[0].length;

  function backtrack(i, j, k) {
    if (k === word.length) return true; // Found the entire word
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k])
      return false; // Out of bounds or mismatch

    const temp = board[i][j]; // Store the current character
    board[i][j] = "#"; // Mark as visited

    // Explore all 4 directions: Down, Up, Right, Left
    const found =
      backtrack(i + 1, j, k + 1) ||
      backtrack(i - 1, j, k + 1) ||
      backtrack(i, j + 1, k + 1) ||
      backtrack(i, j - 1, k + 1);

    board[i][j] = temp; // Restore character after backtracking
    return found;
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === word[0] && backtrack(r, c, 0)) return true; // Start from matching first letter
    }
  }

  return false;
};
