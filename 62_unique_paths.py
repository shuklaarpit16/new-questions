def uniquePaths(m, n):
    if m > 100 or n > 100:
        print("Error: m and n must be at most 100.")
        return 0

    count = 0  # To count all valid paths

    def backtrack(x, y):
        nonlocal count
        # If we reached bottom-right corner
        if x == m - 1 and y == n - 1:
            count += 1
            return
        
        # Move Right if possible
        if x + 1 < m:
            backtrack(x + 1, y)
        
        # Move Down if possible
        if y + 1 < n:
            backtrack(x, y + 1)

    # Start from (0, 0) top-left corner
    backtrack(0, 0)
    return count

# ---------- User Input ----------
m = int(input("Enter number of columns (m): "))
n = int(input("Enter number of rows (n): "))

print()

if m <= 100 and n <= 100:
    print(f"Total Unique Paths: {uniquePaths(m, n)}")
else:
    print("Invalid input! Both m and n must be at most 100.")

