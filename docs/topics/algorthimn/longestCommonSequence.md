#### 最长公共子序列

```js
function longestCommonSequence(s1, s2) {
  const dp = [];

  for (let i = 0; i < s1.length + 1; i++) {
    dp[i] = Array(s2.length).fill(0);
  }
  for (let i = 1; i < s1.length + 1; i++) {
    for (let j = 1; j < s2.length + 1; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  return dp[s1.length][s2.length];
}

function expect(actual) {
  return {
    toBe(expected) {
      console.log(actual === expected, actual);
      return expected === actual;
    }
  };
}

expect(longestCommonSequence("fosh", "fish")).toBe("fsh".length);
expect(longestCommonSequence("fish", "hish")).toBe("ish".length);
expect(longestCommonSequence("lucider", "lucifer")).toBe("lucier".length);
expect(longestCommonSequence("hahaui", "hfui")).toBe("hui".length);
expect(longestCommonSequence("sasa", "fgdfrsa")).toBe("sa".length);
```
