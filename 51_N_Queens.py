def solve_n_queens(n):
    def is_safe(board, row, col, n):
        # Check vertical
        for i in range(row):
            if board[i][col] == 'Q':
                return False

        # Check diagonal left
        i, j = row, col
        while i >= 0 and j >= 0:
            if board[i][j] == 'Q':
                return False
            i -= 1
            j -= 1

        # Check diagonal right
        i, j = row, col
        while i >= 0 and j < n:
            if board[i][j] == 'Q':
                return False
            i -= 1
            j += 1

        return True

    def solve(board, row, n, solutions):
        if row == n:
            solutions.append(["".join(r) for r in board])
            return

        for col in range(n):
            if is_safe(board, row, col, n):
                board[row][col] = 'Q'
                solve(board, row + 1, n, solutions)
                board[row][col] = '.'

    board = [['.' for _ in range(n)] for _ in range(n)]
    solutions = []
    solve(board, 0, n, solutions)

    return solutions

# Taking user input
n = int(input("Enter the value of n: "))
solutions = solve_n_queens(n)

# Print output in the required format
print(f"\nTotal unique solutions = {len(solutions)}")
for sol in solutions:
    print(sol)
    print()
# I have delete the mirror feature from this program as it was giving wrong output.
