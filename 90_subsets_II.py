from typing import List

class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()  # Sort to handle duplicates easily
        self.backtrack(nums, 0, [], res)
        return res

    def backtrack(self, nums, index, path, res):
        res.append(path[:])  # Add a copy of path to result
        for i in range(index, len(nums)):
            if i > index and nums[i] == nums[i - 1]:  # Skip duplicates
                continue
            path.append(nums[i])
            self.backtrack(nums, i + 1, path, res)
            path.pop()  # Backtrack

# Example usage:
solution = Solution()
print(solution.subsetsWithDup([1,2,2]))  # Output: [[], [1], [1,2], [1,2,2], [2], [2,2]]
