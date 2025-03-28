def addBinary(a: str, b: str) -> str:
    i, j = len(a) - 1, len(b) - 1
    carry = 0
    result = []

    while i >= 0 or j >= 0 or carry:
        total = carry

        if i >= 0:
            total += int(a[i])
            i -= 1

        if j >= 0:
            total += int(b[j])
            j -= 1

        # Append the last digit (total % 2)
        result.append(str(total % 2))
        # Carry will be total // 2
        carry = total // 2

    # Since we built result backwards, reverse it
    return ''.join(reversed(result))

# ----------- Testing ----------
a = input("Enter first binary string: ")
b = input("Enter second binary string: ")

print("Sum is:", addBinary(a, b))
