const prompt = require("prompt-sync")();
function primeFactors(n) {
  const factors = [];
  let divisor = 2;
  while (divisor * divisor <= n) {
    while (n % divisor === 0) {
      factors.push(divisor);
      n = Math.floor(n / divisor);
    }
    divisor++;
  }
  if (n > 1) {
    factors.push(n);
  }
  return factors;
}

function intSqrt(x) {
  if (x === 0 || x === 1) {
    console.log(`sqrt(${x}) = ${x}`);
    return;
  }

  const factors = primeFactors(x);
  const freqMap = {};

  for (const f of factors) {
    freqMap[f] = (freqMap[f] || 0) + 1;
  }

  let outsideRoot = 1;
  let insideRoot = 1;

  for (const prime in freqMap) {
    const count = freqMap[prime];
    outsideRoot *= Math.pow(prime, Math.floor(count / 2));
    if (count % 2 !== 0) {
      insideRoot *= prime;
    }
  }

  console.log("Prime Factors:", factors.join(" × "));
  if (insideRoot === 1) {
    console.log(`sqrt(${x}) = ${outsideRoot}`);
  } else {
    console.log(`sqrt(${x}) = ${outsideRoot} * sqrt(${insideRoot})`);
  }

  const decimalValue = outsideRoot * Math.sqrt(insideRoot);
  console.log(`Decimal Value: ${decimalValue.toFixed(5)}`);
}

// -------------------------
// Example usage:
const x = parseInt(prompt("Enter the number to find integer sqrt:"));
intSqrt(x);
