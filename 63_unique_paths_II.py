def uniquePathsWithObstacles(obstacleGrid):
    m = len(obstacleGrid)
    n = len(obstacleGrid[0])

    paths = []  # To store all valid paths

    def backtrack(x, y, path):
        if x >= m or y >= n or obstacleGrid[x][y] == 1:
            return
        
        if x == m - 1 and y == n - 1:
            paths.append(path.copy())
            return
        
        path.append("Right")
        backtrack(x, y + 1, path)
        path.pop()
        
        path.append("Down")
        backtrack(x + 1, y, path)
        path.pop()

    if obstacleGrid[0][0] == 1:
        print("Output: 0")
        return

    backtrack(0, 0, [])

    print(f"Output: {len(paths)}\n")
    for i, p in enumerate(paths, 1):
        print(f"{i}. {' -> '.join(p)}")

# -------- User Input --------
import ast

user_input = input("Input (Example: [[0,0,0],[0,1,0],[0,0,0]]): ")

try:
    obstacleGrid = ast.literal_eval(user_input)
    if not isinstance(obstacleGrid, list) or not all(isinstance(row, list) for row in obstacleGrid):
        raise ValueError
except:
    print("Invalid input! Please enter a valid 2D list.")
else:
    uniquePathsWithObstacles(obstacleGrid)
