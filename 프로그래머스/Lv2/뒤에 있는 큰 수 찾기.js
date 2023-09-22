function solution(numbers) {
  let answer = Array.from({ length: numbers.length }, () => -1);
  let stack = []; // 인덱스를 넣어줄 배열

  for (let i = 0; i < numbers.length; i++) {
    // numbers[stack 가장 위의 인덱스]가 현재 순회하는 수보다 작으면
    // 현재 순회하는 수가 가장 가까운 큰 수
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }

  return answer;
}

const numbers = [9, 1, 5, 3, 6, 2];
console.log(solution(numbers));
