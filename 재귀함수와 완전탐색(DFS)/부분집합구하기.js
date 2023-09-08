function solution(N) {
  let answer = [];
  let list = Array.from({ length: N }, (_, i) => i + 1); // 1부터 N까지 담긴 배열
  let check = Array.from({ length: N }, () => false); // 해당 원소를 부분집합에 포함할지 안할지 체크

  function DFS(v) {
    if (v === N) {
      let subAnswer = list.filter((_, idx) => check[idx]); // check배열에서 트루인 인덱스만 부분집합에 추가
      answer.push(subAnswer);
    } else {
      check[v] = true;
      DFS(v + 1);

      check[v] = false;
      DFS(v + 1);
    }
  }

  DFS(0);
  return answer;
}

const n = 4;
let answer = solution(n);
answer.filter((el) => el.length).forEach((e) => console.log(e.join(" ")));
