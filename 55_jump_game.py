def canJump(nums):
    from collections import deque

    # Function to check if the last index is reachable from the start index
    def can_reach_end(arr):
        max_reach = 0
        for i, num in enumerate(arr):
            if i > max_reach:
                return False
            max_reach = max(max_reach, i + num)
            if max_reach >= len(arr) - 1:
                return True
        return False

    if can_reach_end(nums):
        return True

    queue = deque([nums])  # Queue to store different possible arrays
    seen = set()  # To track visited arrays

    while queue:
        arr = queue.popleft()
        if tuple(arr) in seen:
            continue
        seen.add(tuple(arr))

        for i in range(1, arr[0] + 1):  # Generate new arrays
            new_arr = arr[i:]
            if new_arr and tuple(new_arr) not in seen:
                if can_reach_end(new_arr):
                    return True
                queue.append(new_arr)

    return False


# Taking user input
while True:
    try:
        nums = list(map(int, input("Enter a list of non-negative integers separated by spaces: ").split()))
        
        if any(n < 0 for n in nums):
            raise ValueError("All numbers must be non-negative integers.")
        
        if len(nums) == 0:
            raise ValueError("The list cannot be empty.")

        break  # Exit loop if input is valid

    except ValueError as e:
        print(f"Invalid input: {e}. Please try again.")

# Calling the function
print(canJump(nums))
