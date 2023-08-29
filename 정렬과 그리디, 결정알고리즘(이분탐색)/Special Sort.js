// 음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다. (0은 입력x)

// 버블정렬 응용
function solution(list) {
  let n = list.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 1; j < n - i; j++) {
      if (list[j - 1] > 0 && list[j] < 0) {
        // 앞의 값이 양수이고, 뒤의 값이 음수이면 위치 변경
        [list[j - 1], list[j]] = [list[j], list[j - 1]];
      }
    }
  }
  return list;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];

console.log(solution(arr).join(" "));

function solution2(list) {
  const n = list.length;
  let oddArr = []; // 음수
  let evenArr = []; // 짝수

  for (let i = 0; i < n; i++) {
    if (list[i] < 0) {
      oddArr.push(list[i]);
    } else {
      evenArr.push(list[i]);
    }
  }
  return oddArr.concat(evenArr);
}
