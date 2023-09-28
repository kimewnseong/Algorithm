function solution(k, d) {
  let answer = 0;

  for (let x = 0; x <= d; x += k) {
    // x**2 + y**2 = r**2
    let y = Math.sqrt(d ** 2 - x ** 2);
    answer += Math.floor(y / k) + 1; // 각 x좌표마다 찍을 수 있는 점의 개수
  }

  return answer;
}

const k = 2;
const d = 4;
console.log(solution(k, d));
