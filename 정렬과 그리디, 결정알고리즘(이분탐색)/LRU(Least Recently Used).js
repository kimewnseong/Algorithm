function solution(size, process) {
  let answer = Array.from({ length: size }, () => 0); // 캐시사이즈만큼 배열 초기화

  process.forEach((p) => {
    let position = -1; // hit된 process위치
    if (answer.includes(p)) {
      position = answer.indexOf(p); // hit된 경우, 그 인덱스 저장
    }

    if (position === -1) {
      // miss인 경우, 작업들 한 칸씩 옆으로 이동 ( 가장 앞에는 현재 작업이 들어갈 것이므로 1번째 인덱스까지만 반복)
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
      answer[0] = p; // 첫번째에 현재 작업저장
    } else {
      // hit인 경우, 기존에 있던 작업의 인덱스의 값 삭제 후, 가장 앞에 해당 작업 저장
      answer.splice(position, 1);
      answer.unshift(p);
    }
  });
  return answer;
}

let cacheSize = 5;
let process = [1, 2, 3, 2, 6, 2, 3, 5, 7]; // 작업번호는 0보다 큰 값만 주어짐.
console.log(solution(cacheSize, process).join(" "));
