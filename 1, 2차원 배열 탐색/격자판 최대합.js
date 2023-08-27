function solution(a) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = a.length;
  let sum_row = 0;
  let sum_col = 0;

  for(let i = 0; i < n; i++) {
    sum_row = 0;
    sum_col = 0;

    for(let j = 0; j < n; j++) {
      sum_row += a[i][j];
      sum_col += a[j][i];
    }
    answer = Math.max(answer, sum_row, sum_col);
  }

  sum_row = 0;
  sum_col = 0;
  for(let i = 0; i < n; i++) {   // 대각선들의 합
    sum_row += a[i][i];
    sum_col += a[i][n-i-1];
  }
  answer = Math.max(answer, sum_row, sum_col);

  return answer;
}
  let arr=[ [10, 13, 10, 12, 15], 
              [12, 39, 30, 23, 11],
              [11, 25, 50, 53, 15],
              [19, 27, 29, 37, 27],
              [19, 13, 30, 13, 19]
            ];

    console.log(solution(arr));