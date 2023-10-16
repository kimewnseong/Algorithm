function solution(priorities, location) {
  let answer = 0;

  // 원래 priorities의 location위치에 있던 값에 target부여
  let priorityArr = priorities.map((priority, idx) => {
    if (idx === location) return [priority, 'target'];
    else return [priority, 'other'];
  });

  while (true) {
    // priorityArr를 돌며 우선순위 값들만 저장한 배열 checkArr에 저장
    const checkArr = priorityArr.map((el) => el[0]);

    // 첫번째 요소의 우선순위가 가장 크면 큐에서 제거 (일단 answer 값 추가)
    if (priorityArr[0][0] === Math.max(...checkArr)) {
      answer++;
      // target인 경우 while문 중단
      if (priorityArr.shift()[1] === 'target') {
        break;
      }
    } else {
      // 첫번째 요소의 우선순위가 가장 크지 않으면 큐에서 제거한 뒤 다시 맨 뒤에 추가
      priorityArr.push(priorityArr.shift());
    }
  }
  return answer;
}

const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;
console.log(solution(priorities, location));
