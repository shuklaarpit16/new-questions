from typing import List

class Solution:
    def sortColors(self, nums: List[int]) -> None:
        n = len(nums)
        index = 0

        # Move all 0s to the front
        for i in range(n):
            if nums[i] == 0:
                nums[i], nums[index] = nums[index], nums[i]
                index += 1

        # Move all 1s to the correct position
        for i in range(index, n):
            if nums[i] == 1:
                nums[i], nums[index] = nums[index], nums[i]
                index += 1

        # Move all 2s to the correct position (remaining part is already sorted)
