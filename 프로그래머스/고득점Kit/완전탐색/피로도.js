function solution(k, dungeons) {
  let answer = 0;
  const visited = Array.from({ length: dungeons.length }, () => 0);

  // DFS(남은 피로도, 진행단계)
  function DFS(fatigue, stage) {
    for (let i = 0; i < dungeons.length; i++) {
      // 방문하지 않았고 현재 남은 피로도가 최소 필요도 보다 크거나 같으면 실행
      if (!visited[i] && dungeons[i][0] <= fatigue) {
        // 현재 들어온 던전을 방문 처리
        visited[i] = 1;

        // DFS(현재 피로도 - 방문 던전, 진행단계 + 1)
        DFS(fatigue - dungeons[i][1], stage + 1);

        // DFS 종료 후 방문을 끝내준다.
        visited[i] = 0;
      }
    }
    // 가장 깊이 들어간 진행단계
    answer = Math.max(answer, stage);
  }

  DFS(k, 0);

  return answer;
}

let k = 80;
const dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];
console.log(solution(k, dungeons));
