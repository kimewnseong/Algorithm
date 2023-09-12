function solution(n, g) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let check = Array.from({ length: n + 1 }, () => 0);

  // 인접리스트 만들기
  for (const [i, j] of g) {
    graph[i].push(j);
  }

  function DFS(v) {
    if (v === n) {
      answer++;
    } else {
      for (let i = 0; i <= graph[v].length; i++) {
        // 이동가능한 경우만 그래프로 만들어뒀으므로, 방문여부만 체크하면됨.
        // graph[v][i] : 정점의미
        if (check[graph[v][i]] === 0) {
          check[graph[v][i]] = 1;
          DFS(graph[v][i]);
          check[graph[v][i]] = 0;
        }
      }
    }
  }

  check[1] = 1;
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
