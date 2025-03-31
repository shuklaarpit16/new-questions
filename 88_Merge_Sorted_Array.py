from typing import List

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        # Step 1: Combine both arrays
        nums1[m:] = nums2  # Place nums2 elements at the end of nums1
        
        # Step 2: Sort the combined array in increasing order
        nums1.sort()
