def minPathSum(grid):
    m = len(grid)
    n = len(grid[0])

    min_sum = [float('inf')]
    min_path = []

    def backtrack(x, y, current_sum, path):
        if x >= m or y >= n:
            return
        
        # Add current cell to sum and path
        current_sum += grid[x][y]
        path.append(grid[x][y])

        # If reached bottom-right corner
        if x == m - 1 and y == n - 1:
            if current_sum < min_sum[0]:
                min_sum[0] = current_sum
                min_path.clear()
                min_path.extend(path)
            path.pop()
            return

        # Move Right
        backtrack(x, y + 1, current_sum, path)
        # Move Down
        backtrack(x + 1, y, current_sum, path)

        # Backtrack
        path.pop()

    # Start from (0,0)
    backtrack(0, 0, 0, [])

    # ---------- Output ----------
    print(f"Minimum Path Sum: {min_sum[0]}")
    print("Path is: ", end='')
    print(" → ".join(map(str, min_path)))

# -------- User Input --------
import ast

grid_input = input("Enter the grid (e.g. [[1,3,1],[1,5,1],[4,2,1]]): ")

try:
    grid = ast.literal_eval(grid_input)
    if not isinstance(grid, list) or not all(isinstance(row, list) and all(isinstance(num, int) and num >= 0 for num in row) for row in grid):
        raise ValueError
except:
    print("Invalid input! Please enter a valid 2D grid with non-negative integers.")
else:
    print()
    minPathSum(grid)

