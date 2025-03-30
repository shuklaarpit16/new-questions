from typing import List

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = []
        
        def backtrack(start: int, path: List[int]):
            # Add current subset to result
            result.append(path[:])
            
            # Iterate through the remaining numbers
            for i in range(start, len(nums)):
                path.append(nums[i])
                backtrack(i + 1, path)
                path.pop()
        
        # Start backtracking with an empty path
        backtrack(0, [])
        return result
