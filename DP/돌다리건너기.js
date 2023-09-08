function solution(n) {
  dp = [0, 1, 2];

  for (let i = 3; i <= n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n + 1];
}

const N = 7;
console.log(solution(N));
