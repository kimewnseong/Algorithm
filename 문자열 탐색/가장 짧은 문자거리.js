// s에서 각 문자들이 t와 떨어진 최소거리
function solution(s, t) {
  let answer = [];
  let p = 1000;

  for (let x of s) {
    if (x === t) p = 0;
    else p += 1;

    answer.push(p);
  }

  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p += 1;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer.join(" ");
}

let str = "teachermode";
let target = "e";

console.log(solution(str, target));
