function solution(n, k, enemy) {
  let answer = 0;

  let start = 0;
  let end = enemy.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let arr = enemy.slice(0, mid).sort((a, b) => b - a); // 내림차순 정렬

    let flag = true;
    let temp = 0;
    // 무적권 k개 사용 이후 배열들을 돌며
    for (let i = k; i < arr.length; i++) {
      temp += arr[i];
      // 합이 n보다 크면 구간을 낮춰야함
      if (temp > n) flag = false;
    }

    if (flag) {
      answer = mid;
      start = mid + 1;
    } else end = mid - 1; // 구간 줄이기
  }

  return answer;
}

const n = 7;
const k = 3;
const enemy = [4, 2, 4, 5, 3, 3, 1];
console.log(solution(n, k, enemy));
