function solution(N) {
  function recursion(num) {
    if (num === 0) return;
    else {
      recursion(num - 1);
      console.log(num);
    }
  }
  recursion(N);
}

let n = 3;
solution(n);
