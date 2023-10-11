function solution(number, k) {
  const answer = [];
  for (let num of number) {
    // 제거해야 할 숫자 개수가 남아있고, answer스택의 마지막 값보다 현재 숫자가 더 크면
    while (k > 0 && answer[answer.length - 1] < num) {
      answer.pop(num);
      k -= 1;
    }
    answer.push(num);
  }

  // k가 0보다 크다면 앞에서부터 number길이 - k뺀 만큼 잘라줌
  return answer.join('').slice(0, number.length - k);
}

const number = '4177252841';
const k = 4;
console.log(solution(number, k));
