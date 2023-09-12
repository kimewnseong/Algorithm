function solution(plans) {
  let answer = [];
  let leftPlan = []; // 미뤄둔 과제

  // 시간을 분으로 바꾸고 시작 시간이 빠른 순으로 정렬
  let hourToMinutes = plans
    .map((plan) => {
      let time = parseInt(plan[1].slice(0, 2) * 60);
      let minutes = parseInt(plan[1].slice(3, 5));
      plan[1] = time + minutes;
      plan[2] = parseInt(plan[2]);
      return plan;
    })
    .sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < hourToMinutes.length - 1; i++) {
    const [name, start, spend] = hourToMinutes[i];

    let currentEndTime = start + spend; // 현재 작업의 끝나는 시간
    let nextStartTime = hourToMinutes[i + 1][1]; // 다음 작업의 시작시간

    if (currentEndTime <= nextStartTime) {
      // 다음 작업 시작 시간 전에 종료가 가능하면 answer에 추가
      answer.push(name);
      let freeTime = nextStartTime - start - spend; // 다음 작업까지 남은 여유 시간

      // 멈춰둔 과제가 있으면
      while (leftPlan.length) {
        const [leftName, leftTime] = leftPlan.pop();

        // 여유 시간 내에 멈춰둔 과제를 끝낼 수 있으면 answer에 추가
        if (leftTime <= freeTime) {
          freeTime -= leftTime;
          answer.push(leftName);
        } else {
          leftPlan.push([leftName, leftTime - freeTime]);
          break;
        }
      }
    } else {
      // 다음 과제 시작 전에 종료하지 못하면 leftPlan에 이름과 남은 시간 추가
      leftPlan.push([name, spend - (nextStartTime - start)]);
    }
  }

  answer.push(hourToMinutes[hourToMinutes.length - 1][0]); // 모두 순회 후, 원래 마지막에 진행하던 과제는 answer에 추가. (밀린 과제보다 새 과제가 우선이므로)

  // 밀린 과제 처리
  for (let i = leftPlan.length - 1; i >= 0; i--) {
    answer.push(leftPlan[i][0]);
  }
  return answer;
}

const plans = [
  ["science", "12:40", "50"],
  ["music", "12:20", "40"],
  ["history", "14:00", "30"],
  ["computer", "12:30", "100"],
];

console.log(solution(plans));
