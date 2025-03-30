from collections import Counter

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if not s or not t:
            return ""
        
        t_count = Counter(t)  # Count occurrences of each char in t
        required_chars = len(t_count)
        left, right = 0, 0
        formed = 0
        window_count = {}
        min_len = float("inf")
        min_window = ""

        while right < len(s):
            char = s[right]
            window_count[char] = window_count.get(char, 0) + 1
            
            if char in t_count and window_count[char] == t_count[char]:
                formed += 1
            
            while left <= right and formed == required_chars:
                window_size = right - left + 1
                if window_size < min_len:
                    min_len = window_size
                    min_window = s[left:right+1]
                
                left_char = s[left]
                window_count[left_char] -= 1
                if left_char in t_count and window_count[left_char] < t_count[left_char]:
                    formed -= 1
                
                left += 1
            
            right += 1
        
        return min_window
