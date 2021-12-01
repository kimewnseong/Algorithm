function solution(s) {
  let n = s.length;
  let flag = true;

  s = s.toUpperCase();

  for (let i = 0; i < n / 2; i++) {
    if (s[i] !== s[n - i - 1]) {
      flag = false;
      break;
    }
  }
  if (flag) return "YES";

  return "NO";
}

let str = "tomoT";
console.log(solution(str));
