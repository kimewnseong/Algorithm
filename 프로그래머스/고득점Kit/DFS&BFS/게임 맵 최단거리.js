// visited 사용하지 않은 풀이
function solution(maps) {
  let n = maps.length;
  let m = maps[0].length;

  let answer = BFS(0, 0, maps, n, m);
  return answer;
}

function BFS(x, y, maps, n, m) {
  let d = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let queue = [];
  queue.push([x, y, 1]);

  while (queue.length) {
    let [cx, cy, move] = queue.shift();

    if (cx === n - 1 && cy === m - 1) {
      return move;
    }

    for (const [dx, dy] of d) {
      let nx = dx + cx;
      let ny = dy + cy;
      // 범위 내이고 maps내에서 이동 가능한 곳 일 때 queue에 추가
      if (0 <= nx && nx < n && 0 <= ny && ny < m && maps[nx][ny] === 1) {
        // 이미 queue에 삽입한 곳은 0으로 변경해서 다음에 추가로 삽입 할 일이 없게함.
        maps[nx][ny] = 0;
        queue.push([nx, ny, move + 1]);
      }
    }
  }
  // 위에서 return 안되었으면 -1 return
  return -1;
}

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];
console.log(solution(maps));

// visited 사용한 풀이 (처음 풀이)
// function solution(maps) {
//   let answer = -1;
//   let n = maps.length;
//   let m = maps[0].length;
//   let visited = Array.from(Array(n), () => Array(m).fill(0));

//   let result = BFS(0, 0, maps, visited, n, m);

//   if (result[n - 1][m - 1]) answer = result[n - 1][m - 1];

//   return answer;
// }

// function BFS(x, y, maps, visited, n, m) {
//   let d = [
//     [-1, 0],
//     [1, 0],
//     [0, -1],
//     [0, 1],
//   ];
//   let queue = [];
//   queue.push([x, y, 1]);
//   visited[x][y] = 1;

//   while (queue.length) {
//     let [cx, cy, move] = queue.shift();

//     for (const [dx, dy] of d) {
//       let nx = dx + cx;
//       let ny = dy + cy;
//       if (
//         0 <= nx &&
//         nx < n &&
//         0 <= ny &&
//         ny < m &&
//         visited[nx][ny] === 0 &&
//         maps[nx][ny] === 1
//       ) {
//         queue.push([nx, ny, move + 1]);
//         visited[nx][ny] = move + 1;
//       }
//     }
//   }
//   return visited;
// }
