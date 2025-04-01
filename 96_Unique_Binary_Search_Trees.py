from functools import lru_cache

class Solution:
    def numTrees(self, n: int) -> int:
        @lru_cache(None)
        def count_trees(nodes):
            if nodes <= 1:
                return 1
            
            total = 0
            for root in range(1, nodes + 1):
                left_trees = count_trees(root - 1)
                right_trees = count_trees(nodes - root)
                total += left_trees * right_trees
            
            return total
        
        return count_trees(n)
