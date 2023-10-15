function solution(progresses, speeds) {
  let answer = [];
  let n = progresses.length;
  let needs = [];

  // 필요한 작업일 계산
  for (let i = 0; i < n; i++) {
    let need = Math.ceil((100 - progresses[i]) / speeds[i]);
    needs.push(need);
  }
  console.log(needs);
  let item = 1; // 작업완료 일
  let target = needs[0]; // 첫번째 작업완료 일

  for (let i = 1; i < n; i++) {
    // 다음 작업이 이전 작업보다 요구일이 더 많으면
    if (needs[i] > target) {
      // 이때까지 작업완료된 작업 수 push
      answer.push(item);
      // 비교대상 초기화
      target = needs[i];
      item = 1;
    } else {
      // 작업완료 작업수 +
      item++;
    }
  }
  answer.push(item);

  return answer;
}

const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];
console.log(solution(progresses, speeds));
