function solution(test) {
  let answer = 0;
  let n = test[0].length; // 학생 수
  let m = test.length; // 시험 수
  // 멘토
  for (let i = 1; i <= n; i++) {
    // 멘티
    for (let j = 1; j <= n; j++) {
      let cnt = 0; // 시험 반복 전에 초기화.

      // 시험 수 만큼
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;

        // 학생 수 만큼
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s; //k번째 시험에서 i의 등수는 s
          if (test[k][s] === j) pj = s; // k번째 시험에서 j의 등수는 s
        } // s의 for문을 돌고나오면 학생의 등수가 정해짐.

        // 시험 수 만큼 반복하고나서
        if (pi < pj) cnt++; // i(멘토)의 등수가 더 앞서면 cnt++
      }

      // 시험 수 만큼 앞서면 그땐 멘토 멘티 관계
      if (cnt === m) {
        answer++;
        // console.log(i, j);
      }
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
