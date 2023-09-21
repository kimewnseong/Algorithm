function BFS(startX, startY, map, visited) {
  let nextPosition = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let possibleDay = 0;

  let queue = [];
  queue.push([startX, startY]);

  visited[startX][startY] = 1;
  possibleDay += parseInt(map[startX][startY]);

  while (queue.length) {
    let [cx, cy] = queue.shift();
    for (const [dx, dy] of nextPosition) {
      let nx = cx + dx;
      let ny = cy + dy;
      if (
        0 <= nx &&
        nx < map.length &&
        0 <= ny &&
        ny < map[0].length &&
        map[nx][ny] !== 'X' &&
        visited[nx][ny] === 0
      ) {
        queue.push([nx, ny]);
        visited[nx][ny] = 1;
        possibleDay += parseInt(map[nx][ny]);
      }
    }
  }
  return possibleDay;
}

function solution(maps) {
  let answer = [];
  let xLen = maps.length;
  let yLen = maps[0].length;

  let visited = Array.from(Array(xLen), () => Array(yLen).fill(0));

  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {
      if (maps[i][j] !== 'X' && visited[i][j] === 0) {
        let day = BFS(i, j, maps, visited);
        answer.push(day);
      }
    }
  }

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

const maps = ['X591X', 'X1X5X', 'X231X', '1XXX1'];
console.log(solution(maps));
