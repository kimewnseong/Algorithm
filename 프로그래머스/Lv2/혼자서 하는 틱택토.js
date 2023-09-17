function isWin(arr) {
  let xList = [0, 0, 0];
  let yList = [0, 0, 0];
  let upCross = 0; // 우상향 대각선
  let downCross = 0; // 우하향 대각선

  arr.forEach((el) => {
    xList[el[0]]++;
    yList[el[1]]++;
    if (el[0] === el[1]) {
      downCross++;
    }
    if (el[0] + el[1] === 2) {
      upCross++;
    }
  });

  if (
    xList.includes(3) ||
    yList.includes(3) ||
    upCross === 3 ||
    downCross === 3
  ) {
    return true;
  } else return false;
}

function solution(board) {
  let answer = 1;

  let first = []; // 선공 위치 (O의 위치)
  let second = []; // 후공 위치(X의 위치)

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "O") {
        first.push([i, j]);
      } else if (board[i][j] === "X") {
        second.push([i, j]);
      }
    }
  }

  if (isWin(first) && isWin(second)) {
    // 둘 다 이긴 경우
    answer = 0;
  } else if (isWin(first) && first.length - second.length !== 1) {
    // 선공이 이겼는데, 후공이 표시한 경우
    answer = 0;
  } else if (isWin(second) && first.length !== second.length) {
    // 후공이 이겼는데, 선공이 표시한 경우
    answer = 0;
  } else if (first.length < second.length) {
    // 후공이 더 많은 표시한 경우
    answer = 0;
  } else if (first.length - second.length >= 2) {
    // 선공이 후공보다 2개 이상 표시한 경우
    answer = 0;
  }
  return answer;
}

// const board = ["O.X", ".O.", "..X"];
// const board = ["OOO", "...", "XXX"];
const board = ["...", "...", "..."];
console.log(solution(board));
