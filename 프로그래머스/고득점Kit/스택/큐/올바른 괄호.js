function solution(s) {
  let answer = true;
  let stack = [];

  for (const el of s) {
    if (el === '(') stack.push(el);
    else {
      if (stack.length) stack.pop();
      else return false;
    }
  }

  if (stack.length) answer = false;
  return answer;
}

const s = '()()';
console.log(solution(s));
