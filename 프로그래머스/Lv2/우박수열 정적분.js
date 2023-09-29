function rangeSum(arr, a, b) {
  let sum = 0;
  if (b < a) return -1;

  // 구간합
  for (let i = a; i < b; i++) {
    sum += arr[i];
  }
  return sum;
}

function solution(k, ranges) {
  let answer = [];
  let sequence = [k];
  let width = [];

  // k가 1이 되는 과정의 수열 만들기
  while (k !== 1) {
    if (k % 2) k = k * 3 + 1; // 홀수
    else k = k / 2; // 짝수
    sequence.push(k);
  }

  for (let i = 1; i < sequence.length; i++) {
    // 수열에서 각 구간의 넓이 (직사각형 - 삼각형)
    let w = sequence[i] - (sequence[i] - sequence[i - 1]) / 2;
    width.push(w);
  }

  for (const [a, b] of ranges) {
    let w;
    if (a === 0 && b === 0) w = rangeSum(width, 0, width.length);
    else w = rangeSum(width, a, width.length + b);

    answer.push(w);
  }

  return answer;
}

const k = 3;
const ranges = [
  [0, 0],
  [1, -2],
  [3, -3],
];

console.log(solution(k, ranges));
