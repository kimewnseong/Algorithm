function solution(meeting) {
  let answer = 0;
  let list = [];

  let sortedByEndTime = meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  sortedByEndTime.forEach((t, i) => {
    if (i) {
      // 첫 회의 이후, 이전 회의의 끝나는 시간보다 다음 회의의 시작시간이 크거나 같은 경우
      if (list[list.length - 1][1] <= t[0]) {
        list.push(t);
        answer += 1;
      }
    } else {
      // 처음 회의
      list.push(t);
      answer += 1;
    }
  });
  return answer;
}

let meeting = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

let meeting2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];

console.log(solution(meeting));
console.log(solution(meeting2));
