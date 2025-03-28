def climbStairs(n):
    paths = []

    def backtrack(current, path):
        if current == n:
            paths.append(path[:])
            return
        if current > n:
            return
        
        # Move 1 step
        path.append(current + 1)
        backtrack(current + 1, path)
        path.pop()

        # Move 2 steps
        path.append(current + 2)
        backtrack(current + 2, path)
        path.pop()

    # Start exploring from step 0
    backtrack(0, [])

    # Display output
    print(f"There are {len(paths)} distinct ways you can climb to the top.")
    for p in paths:
        print(" → ".join(map(str, p)))

# ---------- User Input ----------
n = int(input("Enter the number of stairs (n): "))

if n > 0:
    climbStairs(n)
else:
    print("n must be a positive integer.")
