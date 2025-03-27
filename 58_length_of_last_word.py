def lengthOfLastWord(s):
    length = 0
    i = len(s) - 1

    # Step 1: If the last character is a space, return 0
    if s and s[-1] == ' ':
        return 0

    # Step 2: Move backwards and count the last word
    while i >= 0 and s[i] != ' ':
        length += 1
        i -= 1

    return length

# ---------- User Input ----------
s = input("Enter the sentence: ")

print("Length of last word is:", lengthOfLastWord(s))

