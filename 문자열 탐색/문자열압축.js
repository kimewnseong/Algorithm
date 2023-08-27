function solution(s) {
  let answer = "";
  let count = 1;
  s = s + " "; // 마지막 값도 비교하기 위해

  // " " 빼고 비교하기위해 -1
  for (let i = 0; i < s.length - 1; i++) {
    // 알파벳까지만 가게 -1
    if (s[i] === s[i + 1]) count += 1;
    else {
      answer += s[i];
      if (count !== 1) answer += count;
      count = 1;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
