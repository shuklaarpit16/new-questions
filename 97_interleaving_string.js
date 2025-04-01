var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }

  const dp = Array.from({ length: s1.length + 1 }, () =>
    Array(s2.length + 1).fill(false)
  );
  dp[0][0] = true;

  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      if (i > 0 && s1[i - 1] === s3[i + j - 1]) {
        dp[i][j] = dp[i][j] || dp[i - 1][j];
      }
      if (j > 0 && s2[j - 1] === s3[i + j - 1]) {
        dp[i][j] = dp[i][j] || dp[i][j - 1];
      }
    }
  }

  return dp[s1.length][s2.length];
};

// Test cases (Uncomment these if you want to run locally)
// console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac")); // true
// console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc")); // false
// console.log(isInterleave("", "", "")); // true
