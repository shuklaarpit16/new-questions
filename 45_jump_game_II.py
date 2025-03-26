from collections import deque

def min_jumps_to_end(nums):
    n = len(nums)
    if n <= 1:
        return 0  # Already at the last index
    
    queue = deque([(0, 0)])  # (current index, jumps)
    visited = set()  # To avoid revisiting indexes

    while queue:
        index, jumps = queue.popleft()

        # Explore all possible jumps from the current index
        for step in range(1, nums[index] + 1):
            new_index = index + step

            if new_index >= n - 1:  # Reached the last index
                return jumps + 1
            
            if new_index not in visited:
                visited.add(new_index)
                queue.append((new_index, jumps + 1))

    return -1  # If it's not possible to reach the last index

# Taking user input with constraints
while True:
    try:
        nums = list(map(int, input("Enter space-separated numbers: ").split()))
        
        # Check constraints
        if not (1 <= len(nums) <= 1000):
            raise ValueError("Length of the array must be between 1 and 1000.")
        if any(num < 0 or num > 10**5 for num in nums):
            raise ValueError("Each number must be between 0 and 100000.")
        
        result = min_jumps_to_end(nums)
        print("Minimum jumps needed:", result)
        break
    except ValueError as e:
        print(f"Invalid input: {e}. Please try again.")
