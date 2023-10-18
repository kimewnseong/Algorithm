function solution(numbers) {
  let answer = '';

  const numberToStr = numbers.map((number) => String(number));

  // ex) a = '1' b = '20' 이면
  // a+b는 120 b+a는 201 -> b+a가 앞으로 가야하기에 내림차순 정렬
  answer = numberToStr.sort((a, b) => b + a - (a + b)).join('');

  // numbers의 모든 숫자가 0이면 이어붙인 값이 아닌 0리턴
  return answer[0] === '0' ? '0' : answer;
}

const numbers = [0, 0, 0, 0, 0];
console.log(solution(numbers));
