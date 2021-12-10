function solution(num, k, card) {
  let sum = []; // num장 씩 합쳤을 때

  for (let i = 0; i < num - k + 1; i++) {
    for (let j = i + 1; j < num - k + 2; j++) {
      for (let s = j + 1; s < num; s++) {
        sum.push(card[i] + card[j] + card[s]);
      }
    }
  }
  // n장씩 합친걸 내림차순정렬 후, 중복 제거
  let result = sum.sort((a, b) => b - a).filter((v, i) => sum.indexOf(v) === i);
  // k번째로 큰 수 return
  return result[k - 1];
}

let n = 10;
let k = 3;
let card = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

console.log(solution(n, k, card));
