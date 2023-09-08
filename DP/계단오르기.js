// 계단 한 칸 또는 두 칸 이동. N칸까지 가는 방법의 수
function solution(n) {
  let dp = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

const N = 7;
console.log(solution(N));
