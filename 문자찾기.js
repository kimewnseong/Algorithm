function solution(s, w) {
  let answer = 0;

  for(const i of s) {
    if (i === w) answer += 1;
  }
  
  return answer;
}

let string = "COMPUTERPROGRAMMING";
let word = "R"
console.log(solution(string, word));