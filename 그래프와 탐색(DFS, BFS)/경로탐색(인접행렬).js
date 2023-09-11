function solution(n, g) {
  let answer = 0;

  // N보다 1큰 값을 길이로 갖는 2차원 배열 생성 (인덱싱을 편하게 하기 위해)
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let check = Array.from({ length: n + 1 }, () => 0);
  // let path = []; // 경로확인용

  // 인접행렬 만들기
  for (const [i, j] of g) {
    graph[i][j] = 1;
  }

  function DFS(v) {
    check[1] = 1;
    if (v === n) {
      answer++;
      // console.log(path);
    } else {
      for (let i = 1; i <= n; i++) {
        // v에서 i로 갈 수 있고, 아직 i를 방문하지 않았으면
        if (graph[v][i] === 1 && check[i] === 0) {
          check[i] = 1;
          // path.push(i);
          DFS(i);
          check[i] = 0; // 돌아왔을 때, 방문 체크 해제
          // path.pop();
        }
      }
    }
  }

  // path.push(1);
  DFS(1);

  return answer;
}

const N = 5;

const graph = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];

console.log(solution(N, graph));
