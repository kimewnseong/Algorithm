function solution(s, e) {
  let answer = 0;
  let check = Array.from({ length: 10001 }, () => 0);

  let next = [-1, 1, 5]; // 이동가능한 위치
  let queue = [];

  check[s] = 1;
  queue.push([s, 0]); // 현재 위치와 이동횟수

  while (queue.length) {
    let [current, move] = queue.shift(); // 앞에서 제거

    // 도착하면 종료
    if (current === e) {
      answer = move;
      break;
    }

    for (const n of next) {
      // 좌표 범위 내이고, 아직 해당 위치에 방문한 적이 없으면
      let nextPosition = n + current;
      if (
        1 <= nextPosition &&
        nextPosition <= 10000 &&
        check[nextPosition] === 0
      ) {
        check[nextPosition] = 1; // 다음 위치 방문 체크
        queue.push([nextPosition, move + 1]); // 이동 위치와 횟수 큐에 푸시
      }
    }
  }

  return answer;
}

// 좌표는 1 ~ 10000
const S = 8; // 현재 위치
const E = 3; // 송아지 위치
console.log(solution(S, E));
