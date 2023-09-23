// x를 y로 변환하기
// DP
function solution(x, y, n) {
  let dp = Array.from({ length: y + 1 }, () => Infinity);
  dp[x] = 0;

  for (let i = x; i <= y; i++) {
    if (i + n <= y) dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    if (i * 2 <= y) dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    if (i * 3 <= y) dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
  }
  return dp[y] === Infinity ? -1 : dp[y];
}

const x = 10;
const y = 40;
const n = 30;
console.log(solution(x, y, n));

// BFS (시간초과)
function solution2(x, y, n) {
  let answer = -1;

  let queue = [];
  let visited = Array.from({ length: y + 1 }, () => 0);
  queue.push([x, 0]);
  visited[x] = 1;

  while (queue.length) {
    let [currentValue, count] = queue.shift();

    if (currentValue === y) {
      answer = count;
      break;
    }

    for (let nextValue of [
      currentValue + n,
      currentValue * 2,
      currentValue * 3,
    ]) {
      if (visited[nextValue] === 0 && currentValue <= y) {
        queue.push([nextValue, count + 1]);
        visited[nextValue] = 1;
      }
    }
  }

  return answer;
}
