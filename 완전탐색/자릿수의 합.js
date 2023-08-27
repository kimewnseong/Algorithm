function solution(arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for (let a of arr) {
    // 하나씩 돌며 자리수 더함
    let sum = a
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    if (sum > max) {
      max = sum;
      answer = a; // answer에 원본을 저장
    } else if (sum === max) {
      // 자리수의 합이 같은 경우 원래가 큰 것 선택
      if (a > answer) answer = a;
    }
  }

  return answer;
}
let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
