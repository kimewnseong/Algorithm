function solution(s) {
  let answer = "";
  for (const x of s) {
    if (!isNaN(x)) answer += x;
  }

  return parseInt(answer);

  // 2번째
  // let answer = 0;
  // for (const x of s) {
  //   if (!isNaN(x)) answer = answer * 10 + Number(x); // 반복될때마다 자리 수 증가를 위해 10곱함
  // }
  // return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
