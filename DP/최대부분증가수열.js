function solution(arr) {
  let answer = 0;
  // dp에는 arr[i]번째 값이 최대증가수열의 마지막 값일 때의 최대부분증가 수열의 길이값 저장
  let dp = [1];

  for (let i = 1; i <= arr.length; i++) {
    let max = 0;
    // 앞에 올 수 있는 값들 체크
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
    answer = Math.max(dp[i], answer);
  }
  return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
