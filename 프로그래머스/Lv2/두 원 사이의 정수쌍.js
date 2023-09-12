function solution(r1, r2) {
  let answer = 0;

  for (let x = 1; x <= r2; x++) {
    let max = Math.floor(Math.sqrt(r2 ** 2 - x ** 2)); // 사이의 정수 값이므로 y길이 구해서 내림
    // 만약, x가 r1보다 크면 해당 x좌표에서의 min값은 0
    // r1이 x보다 이상이면 y길이를 구해서 올림
    let min = r1 > x ? Math.ceil(Math.sqrt(r1 ** 2 - x ** 2)) : 0;

    answer += max - min + 1;
  }
  return answer * 4;
}

let r1 = 2;
let r2 = 3;

console.log(solution(r1, r2));
