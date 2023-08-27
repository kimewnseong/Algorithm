// 연속으로 문제를 맞출 경우 가산점을 부여
function solution(a) {
  let count = 0;
  let score = 0;

  for (const x of a) {
    if ( x === 1 ) {
      count += 1;
      score += count;
    } else count = 0;
  }
  return score;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));