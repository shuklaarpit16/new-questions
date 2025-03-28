import math

def int_sqrt(x):
    if x == 0 or x == 1:
        return x

    factors = []

    # Step 1: Prime factorization
    divisor = 2
    num = x
    while divisor * divisor <= num:
        while num % divisor == 0:
            factors.append(divisor)
            num //= divisor
        divisor += 1
    if num > 1:
        factors.append(num)

    # Step 2: Count prime factor frequencies
    factor_count = {}
    for f in factors:
        factor_count[f] = factor_count.get(f, 0) + 1

    # Step 3: Extract perfect squares
    outside_root = 1
    inside_root = 1

    for p, count in factor_count.items():
        outside_root *= p ** (count // 2)  # pairs go outside
        if count % 2 != 0:
            inside_root *= p               # leftovers stay inside root

    # Step 4: Print results
    print("Prime Factors:", factors)
    if inside_root == 1:
        print(f"sqrt({x}) = {outside_root}")
    else:
        print(f"sqrt({x}) = {outside_root} * sqrt({inside_root})")
    
    # Optional: also show decimal
    print(f"Decimal Value: {outside_root * math.sqrt(inside_root):.5f}")

# -----------------
num = int(input("Enter the number to find integer sqrt: "))
int_sqrt(num)
