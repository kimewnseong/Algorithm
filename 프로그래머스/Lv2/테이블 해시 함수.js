function solution(data, col, row_begin, row_end) {
  let answer = 0;

  // 테이블의 튜플을 col번째 컬럼의 값을 기준으로 오름차순 정렬,
  // 만약 그 값이 동일하면 첫 번째 컬럼의 값을 기준으로 내림차순 정렬합니다.
  let S = data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) return b[0] - a[0];
    else return a[col - 1] - b[col - 1];
  });

  // 정렬된 데이터에서 S_i를 i 번째 행의 튜플에 대해 각 컬럼의 값을 i 로 나눈 나머지들의 합으로 정의
  // row_begin ≤ i ≤ row_end 인 모든 S_i를 누적하여 bitwise XOR 한 값을 해시 값으로서 반환
  for (let i = row_begin - 1; i <= row_end - 1; i++) {
    let s_element = S[i].reduce((acc, cur) => (acc += cur % (i + 1)), 0);
    answer ^= s_element;
  }

  return answer;
}

const data = [
  [2, 2, 6],
  [1, 5, 10],
  [4, 2, 9],
  [3, 8, 3],
];

const col = 2;
const row_begin = 2;
const row_end = 3;

console.log(solution(data, col, row_begin, row_end));
