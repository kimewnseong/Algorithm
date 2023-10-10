function solution(triangle) {
  let layer = triangle.length;
  let dp = Array.from({ length: layer }, () => []); // i층 j번째의 누적합을 담은 배열
  dp[0] = [triangle[0][0]]; // 첫번째 층은 triangle[0]의 첫번째 값

  triangle.forEach((el, idx) => {
    if (idx) {
      el.forEach((item, j) => {
        if (j === 0) {
          // 각 층의 첫번째 요소 : 위의 층의 누적합의 0번째 요소 + 현재 요소 (0번째 요소)
          dp[idx][j] = dp[idx - 1][0] + item;
        } else if (j === idx) {
          // 각 층의 마지막 요소 : 위의 층의 누적합의 마지막 요소 + 현재 요소 (마지막 요소)
          dp[idx][j] = dp[idx - 1][j - 1] + item;
        } else {
          // 첫번째, 마지막이 아닌 요소 : (위의 층의 누적합의 j번째 요소 + 현재 요소) , (위의 층의 누적합의 j번째 요소 + 현재 요소) 중 큰 요소
          dp[idx][j] = Math.max(
            dp[idx - 1][j - 1] + item,
            dp[idx - 1][j] + item
          );
        }
      });
    }
  });

  return Math.max(...dp[layer - 1]);
}

const triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
console.log(solution(triangle));
