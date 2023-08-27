function solution(A, B) {
  let answer = [];

  // 우선 두 배열을 오름차순 정렬
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  aIdx = 0;
  bIdx = 0;

  // 한쪽의 탐색이 끝나면 반복 종료
  while (aIdx < A.length && bIdx < B.length) {
    // 같으면 넣어주고 각 인덱스 하나씩 증가
    if (A[aIdx] === B[bIdx]) {
      answer.push(A[aIdx]);
      aIdx++;
      bIdx++;
    } else if (A[aIdx] < B[bIdx]) aIdx++;
    // 다르면 더 작은 값의 인덱스를 올려줌
    else bIdx++;
  }

  return answer.join(" ");
}

let A = [1, 3, 9, 5, 2];
let B = [3, 2, 5, 7, 8];
console.log(solution(A, B));
