function GCD(a, b) {
  if (a % b === 0) return b;
  return GCD(b, a % b);
}

function solution(arrayA, arrayB) {
  let answer = 0;

  let gcdA = arrayA[0];
  let gcdB = arrayB[0];

  for (let i = 1; i < arrayA.length; i++) {
    gcdA = GCD(gcdA, arrayA[i]);
    gcdB = GCD(gcdB, arrayB[i]);
  }

  // 최대공약수가 1이라면 0으로 바꿔줌. (아래서 answer와 값 비교를 위해)
  if (gcdA === 1) gcdA = 0;
  if (gcdB === 1) gcdB = 0;

  if (arrayA.every((a) => a % gcdB !== 0)) answer = Math.max(answer, gcdB);
  if (arrayB.every((b) => b % gcdA !== 0)) answer = Math.max(answer, gcdA);

  return answer;
}

const arrayA = [10, 20];
const arrayB = [5, 17];
console.log(solution(arrayA, arrayB));
