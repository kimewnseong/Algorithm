function solution(N) {
  let answer = "";

  function recursion(n) {
    if (n === 0) {
      return;
    } else {
      recursion(parseInt(n / 2));
      answer += n % 2;
    }
  }

  recursion(N);
  return answer;
}

const num = 11;
console.log(solution(num));
