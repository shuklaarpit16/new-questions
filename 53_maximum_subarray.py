def max_subarray_sum(arr):
    max_sum = float('-inf')  # Initialize to negative infinity
    n = len(arr)
    
    # Iterate over each starting index
    for start in range(n):
        current_sum = 0
        # Iterate over each ending index for the current start
        for end in range(start, n):
            current_sum += arr[end]
            # Update max_sum if current_sum is greater
            if current_sum > max_sum:
                max_sum = current_sum
    
    return max_sum

if __name__ == "__main__":
    # Take user input
    arr = list(map(int, input("Enter array elements separated by space: ").split()))
    
    # Find and print the maximum subarray sum
    print("Maximum subarray sum:", max_subarray_sum(arr))
