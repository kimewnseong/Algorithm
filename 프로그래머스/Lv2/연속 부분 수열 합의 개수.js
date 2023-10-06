// 연속 부분 수열의 합 (중복 x)
function solution(elements) {
  const set = new Set();
  const n = elements.length;

  // elements 배열의 시작위치
  for (let i = 0; i < n; i++) {
    let sum = 0;
    // 연속 부분 수열 시작위치부터 i+n까지 순회 (원형이므로)
    for (let j = i; j < i + n; j++) {
      // % 인덱스를 순환하면서 sum에 더함
      sum += elements[j % n];
      set.add(sum);
    }
  }
  return set.size;
}

const elements = [7, 9, 1, 1, 4];
console.log(solution(elements));
