function solution(times) {
  let answer = 0;
  let timeline = [];

  for (const t of times) {
    timeline.push([t[0], "start"]);
    timeline.push([t[1], "end"]);
  }

  timeline.sort((a, b) => {
    // 시간이 같은 경우, endTime이 앞에 오도록 정렬
    if (a[0] === b[0]) return a[1].charCodeAt(0) - b[1].charCodeAt(0);
    else return a[0] - b[0];
  });

  let count = 0;
  // 도착시간인 경우 사람 수 +1, 가는 시간인 경우, -1. answer는 매번 최댓값으로 갱신
  for (const t of timeline) {
    if (t[1] === "start") count++;
    else count--;
    answer = Math.max(answer, count);
  }
  return answer;
}

function solution2(times) {
  let answer = [];
  let sortedTimes = times.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  sortedTimes.forEach((time, idx) => {
    let count = 1; // 첫번째는 무조건 참석
    let startTime = time[0];
    let endTime = time[1] - 1;

    // 순회하는 친구 다음 친구들과 겹치는지 비교
    for (let i = idx + 1; i < sortedTimes.length; i++) {
      if (
        (startTime <= sortedTimes[i][0] && sortedTimes[i][0] <= endTime) ||
        (startTime <= sortedTimes[i][1] - 1 && sortedTimes[i][1] - 1 <= endTime)
      ) {
        count += 1;

        let newTargetTime = [
          startTime,
          endTime,
          sortedTimes[i][0],
          sortedTimes[i][1] - 1,
        ].sort((a, b) => a - b);
        startTime = newTargetTime[1];
        endTime = newTargetTime[2];
      } else {
        break;
      }
    }
    answer.push(count);
  });
  return Math.max(...answer);
}

let times = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];

console.log(solution(times));
console.log(solution2(times));
