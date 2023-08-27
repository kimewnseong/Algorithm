function solution(a, b) {
  let answer = "YES";
  let aHash = new Map();

  for (let x of a) {
    if (aHash.has(x)) aHash.set(x, aHash.get(x) + 1);
    else aHash.set(x, 1);
  }

  for (let x of b) {
    // Map내에 b의 원소가 없거나, 있을 때 그 갑이 0이면 아나그램X
    if (!aHash.has(x) || aHash.get(x) === 0) return "NO";
    aHash.set(x, aHash.get(x) - 1);
  }
  return answer;
}

let str1 = "AbaAeCe";
let str2 = "baeeACA";
// let str3 = "abaCC";
// let str4 = "Caaab";
console.log(solution(str1, str2)); // YES
// console.log(solution(str3, str4));  // NO
