function solution(list) {
  let answer = [];

  let n = list.length;
  let sortedList = [...list].sort((a, b) => a - b); // 원래 배정받은 정렬된 상태의 배열

  for (let i = 0; i < n; i++) {
    if (list[i] !== sortedList[i]) {
      // 원래 순서와 다른 지점의 값들을 찾은 뒤, 1 더해서 저장 (1반부터 시작)
      answer.push(i + 1);
    }
  }
  return answer;
}

// 정렬되어 있는 수들 중 서로 순서를 바꾼 것이 현수, 현수의 짝
let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr2 = [120, 130, 150, 150, 130, 150];
console.log(solution(arr).join(" "));
console.log(solution(arr2).join(" "));
