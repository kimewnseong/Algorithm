// 연속된 수들의 합이 m이 되는 경우를 찾는 문제
function solution(arr, m) {
  let answer = 0;
  let sum = 0;
  let minusIdx = 0; // 인덱스를 올리며 값을 빼줌

  for (let plusIdx = 0; plusIdx < arr.length; plusIdx++) {
    sum += arr[plusIdx];

    if (sum === m) {
      answer++;
    }

    // m보다 크거나 같다면 작아질 때 까지 앞 부분을 빼줌.
    // 빼주면서 m과 같은지 매번 확인
    while (sum >= m) {
      sum -= arr[minusIdx++];
      if (sum === m) {
        answer++;
      }
    }
  }
  return answer;
}

let N = 8;
let M = 6;
let numList = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(numList, M));
