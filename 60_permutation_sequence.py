def permute_until_k(arr, k, start=0, count=[0], result=[None]):
    # Stop early if we already found the result
    if result[0] is not None:
        return

    if start == len(arr) - 1:
        count[0] += 1
        if count[0] == k:
            result[0] = arr.copy()
        return

    for i in range(start, len(arr)):
        arr[start], arr[i] = arr[i], arr[start]  # Swap
        
        permute_until_k(arr, k, start + 1, count, result)
        
        arr[start], arr[i] = arr[i], arr[start]  # Backtrack
        
        if result[0] is not None:  # Extra stop after recursion returns
            return

# ---------- User Input ----------
n = int(input("Enter n (1 to 9): "))
k = int(input("Enter k (1 to n!): "))

nums = list(range(1, n + 1))  # Create list [1, 2, 3, ..., n]

result = [None]
permute_until_k(nums, k, result=result)

if result[0]:
    print("The", k, "th permutation is:", ''.join(map(str, result[0])))
else:
    print("Invalid k value!")
