class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        # If the length of s3 is not equal to the sum of lengths of s1 and s2, return False
        if len(s1) + len(s2) != len(s3):
            return False
        
        # DP table initialization
        dp = [[False] * (len(s2) + 1) for _ in range(len(s1) + 1)]
        
        # Base case: empty strings
        dp[0][0] = True
        
        # Fill DP table
        for i in range(len(s1) + 1):
            for j in range(len(s2) + 1):
                if i > 0 and s1[i - 1] == s3[i + j - 1]:
                    dp[i][j] = dp[i][j] or dp[i - 1][j]
                if j > 0 and s2[j - 1] == s3[i + j - 1]:
                    dp[i][j] = dp[i][j] or dp[i][j - 1]
        
        # The answer is whether we can form s3 using all of s1 and s2
        return dp[len(s1)][len(s2)]

# Example usage:
solution = Solution()
print(solution.isInterleave("aabcc", "dbbca", "aadbbcbcac"))  # Output: True
print(solution.isInterleave("aabcc", "dbbca", "aadbbbaccc"))  # Output: False
print(solution.isInterleave("", "", ""))  # Output: True
