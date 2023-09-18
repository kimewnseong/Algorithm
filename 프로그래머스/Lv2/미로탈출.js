function BFS(n, m, startX, startY, maps, endX, endY) {
  let nextPosition = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let move = -1;
  let queue = [];
  let visited = Array.from(Array(n), () => Array(m).fill(0));

  queue.push([startX, startY, 0]);
  visited[startX][startY] = 1;

  while (queue.length) {
    let [cx, cy, count] = queue.shift();

    if (cx === endX && cy === endY) {
      move = count;
      break;
    }

    for (let [dx, dy] of nextPosition) {
      let nx = cx + dx;
      let ny = cy + dy;
      if (
        0 <= nx &&
        nx < n &&
        0 <= ny &&
        ny < m &&
        maps[nx][ny] !== "X" &&
        visited[nx][ny] === 0
      ) {
        queue.push([nx, ny, count + 1]);
        visited[nx][ny] = 1;
      }
    }
  }
  return move;
}

function solution(maps) {
  let answer = -1;
  let M = maps[0].length;
  let N = maps.length;
  let startX;
  let startY;
  let lever;
  let endPosition;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (maps[i][j] === "S") {
        startX = i;
        startY = j;
      } else if (maps[i][j] === "L") {
        lever = [i, j];
      } else if (maps[i][j] === "E") {
        endPosition = [i, j];
      }
    }
  }

  // 시작지점부터 레버까지 최소 거리
  let startToLever = BFS(N, M, startX, startY, [...maps], lever[0], lever[1]);
  // 레버부터 도착지점까지 최소 거리
  let leverToEnd = BFS(
    N,
    M,
    lever[0],
    lever[1],
    [...maps],
    endPosition[0],
    endPosition[1]
  );

  // 둘 다 이동이 가능하면 두 이동거리를 더 함
  if (startToLever !== -1 && leverToEnd !== -1) {
    answer = startToLever + leverToEnd;
  }

  return answer;
}

const maps = ["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"];
console.log(solution(maps));
