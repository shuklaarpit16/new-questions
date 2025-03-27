def groupAnagrams(strs):
    result = []  # To store the groups
    used = [False] * len(strs)  # To mark which words are already grouped

    for i in range(len(strs)):
        if not used[i]:
            group = [strs[i]]  # Start a new group with the current word
            used[i] = True
            for j in range(i + 1, len(strs)):
                if not used[j]:
                    # Compare if both words are anagrams by comparing sorted versions
                    if sorted(strs[i]) == sorted(strs[j]):
                        group.append(strs[j])
                        used[j] = True
            result.append(group)  # Add the formed group to the result
    
    return result


# ---------- User Input ----------

input_strs = input("Enter words separated by space: ").split()

print("\nGrouped Anagrams:")
print(groupAnagrams(input_strs))


# Example usage:
#input_strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
#print(groupAnagrams(input_strs))


