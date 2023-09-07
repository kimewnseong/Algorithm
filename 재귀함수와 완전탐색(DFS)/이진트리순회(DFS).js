function solution(n) {
  let pre_answer = [];
  let post_answer = [];

  function pre_DFS(v) {
    if (v > n) {
      return;
    } else {
      pre_answer.push(v);
      pre_DFS(v * 2);
      pre_DFS(v * 2 + 1);
    }
  }

  function post_DFS(v) {
    if (v > n) {
      return;
    } else {
      post_DFS(v * 2);
      post_DFS(v * 2 + 1);
      post_answer.push(v);
    }
  }
  pre_DFS(1);
  post_DFS(1);
  return { pre_answer, post_answer };
}

let N = 7;

let { pre_answer, post_answer } = solution(N);
console.log("전위", pre_answer.join(" "));
console.log("후위", post_answer.join(" "));
