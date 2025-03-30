class Solution:
    def simplifyPath(self, path: str) -> str:
        stack = []  # Stack to store directory names in canonical form
        parts = path.split('/')  # Split by '/'

        for part in parts:
            if part == "..":
                if stack:  # Go up one directory if possible
                    stack.pop()
            elif part and part != ".":  # Ignore empty parts (from '//' or ending '/') and '.'
                stack.append(part)  # Store valid directory/file names

        return "/" + "/".join(stack)  # Join the cleaned directory names with '/'
