class Solution:
    def exist(self, board: list[list[str]], word: str) -> bool:
        m, n = len(board), len(board[0])

        def backtrack(i, j, k):
            if k == len(word):  # Found the entire word
                return True
            
            if i < 0 or i >= m or j < 0 or j >= n or board[i][j] != word[k]:  # Out of bounds or mismatch
                return False

            temp = board[i][j]  # Store the current character
            board[i][j] = "#"  # Mark as visited
            
            # Explore all 4 directions: Right, Left, Down, Up
            found = (backtrack(i+1, j, k+1) or 
                     backtrack(i-1, j, k+1) or 
                     backtrack(i, j+1, k+1) or 
                     backtrack(i, j-1, k+1))
            
            board[i][j] = temp  # Restore character after backtracking
            
            return found

        for r in range(m):
            for c in range(n):
                if board[r][c] == word[0] and backtrack(r, c, 0):  # Start from matching first letter
                    return True
        
        return False
