function solution(arr) {
  let answer = "NO";

  const n = arr.length;
  let flag = false;
  let total = arr.reduce((acc, cur) => acc + cur, 0);

  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

function solution2(arr) {
  let answer;

  const n = arr.length;
  const check = Array.from({ length: n }, () => false);
  let subset = []; // 부분집합 목록
  let sums = [];

  // 부분집합 만들기
  function DFS(v) {
    if (v === n) {
      let element = arr.filter((_, idx) => check[idx]);
      subset.push(element);
    } else {
      check[v] = true;
      DFS(v + 1);

      check[v] = false;
      DFS(v + 1);
    }
  }

  DFS(0);

  subset.forEach((s) =>
    sums.push(s.reduce((sum, currValue) => sum + currValue, 0))
  );
  let originSize = sums.length;

  let setSums = new Set(sums); // 중복값 제거
  let setSize = setSums.size;

  // 부분집합들의 모든 합과, 중복된 값을 제거한 합의 길이가 다르면 합이 같은 부분집합이 있었다는 의미
  if (originSize !== setSize) {
    answer = "YES";
  } else {
    answer = "NO";
  }

  return answer;
}

const list = [1, 3, 5, 6, 7, 10];

console.log(solution(list));
console.log(solution2(list));
