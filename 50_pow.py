def myPow(x, n):
    # If n is negative, take reciprocal and make n positive
    if n < 0:
        x = 1 / x
        n = -n

    result = 1.0
    
    # Multiply x, n times
    for _ in range(n):
        result *= x

    return result

# ---------- User Input ----------
x = float(input("Enter the value of x: "))
n = int(input("Enter the value of n: "))

print("Output:", myPow(x, n))
