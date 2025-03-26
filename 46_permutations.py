def permute(arr, start=0):
    if start == len(arr) - 1:  # Base case: when we reach the last index
        print(arr)  # Print or store the permutation
        return
    
    for i in range(start, len(arr)):
        # Swap current index with start
        arr[start], arr[i] = arr[i], arr[start]
        
        # Recurse with the next index
        permute(arr, start + 1)
        
        # Backtrack (undo the swap)
        arr[start], arr[i] = arr[i], arr[start]

# Taking user input
user_input = input("Enter numbers separated by spaces: ")
nums = list(map(int, user_input.split()))  # Convert input into a list of integers

# Generate permutations
permute(nums)
