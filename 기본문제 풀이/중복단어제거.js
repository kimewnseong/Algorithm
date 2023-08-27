function solution(n, s) {

  let answer = s.filter( (v, i) => {
    return s.indexOf(v) === i;
  });

  return answer.join(" ");
}

let num = 5;
let str = ["good", "time", "good", "time", "student"];
console.log(solution(num, str));
