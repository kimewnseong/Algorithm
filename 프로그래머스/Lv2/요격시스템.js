function solution(targets) {
  // 처음은 무조건 발사
  let answer = 1;

  // x값을 기준으로 내림차순 정렬
  targets.sort((a, b) => b[0] - a[0]);

  let prevS = targets[0][0];

  for (let i = 1; i < targets.length; i++) {
    let [curS, curE] = targets[i];

    // 이전 구간의 시작점이 현재 구간의 끝지점보다 크거나 같으면 미사일 추가
    if (prevS >= curE) {
      answer++;
      prevS = curS;
    }
  }

  return answer;
}

let targets = [
  [4, 5],
  [4, 8],
  [10, 14],
  [11, 13],
  [5, 12],
  [3, 7],
  [1, 4],
];

console.log(solution(targets));
