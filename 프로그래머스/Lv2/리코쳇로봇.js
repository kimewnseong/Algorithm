function isMove(cx, cy, dx, dy, board) {
  const nx = cx + dx;
  const ny = cy + dy;

  return (
    0 <= nx &&
    nx < board.length &&
    0 <= ny &&
    ny < board[0].length &&
    board[nx][ny] !== "D"
  );
}

function solution(board) {
  let answer = -1;

  let row = board.length;
  let col = board[0].length;

  // 시작위치 기록
  let startX;
  let startY;

  // 시작위치 찾기
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === "R") {
        startX = i;
        startY = j;
        break;
      }
    }
  }

  // 큐에 시작점, 이동횟수 삽입 및 방문 체크
  const queue = [];
  const visited = Array.from(Array(row), () => Array(col).fill(0));
  visited[startX][startY] = 1;
  queue.push([startX, startY, 0]);

  // 상하좌우 이동
  let nextPosition = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  while (queue.length) {
    let [currentX, currentY, count] = queue.shift();

    if (board[currentX][currentY] === "G") {
      answer = count;
      break;
    }

    for (const [dx, dy] of nextPosition) {
      let cx = currentX;
      let cy = currentY;

      // 미끄러지는 부분 (이동한 방향으로 쭉 움직임)
      while (isMove(cx, cy, dx, dy, board)) {
        cx += dx;
        cy += dy;
      }

      if (!visited[cx][cy]) {
        queue.push([cx, cy, count + 1]);
        visited[cx][cy] = 1;
      }
    }
  }

  return answer;
}

const board = ["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."];
console.log(solution(board));
