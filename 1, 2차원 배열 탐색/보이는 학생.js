function solution(s) {
  // 강의 풀이, 내 앞 선 사람들 중 젤 큰 사람의 값을 저장해서 비교
  let max = s[0];  // 첫번째 사람은 무조건 들어감
  let answer = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] > max) {
      answer += 1;
      max = s[i];
    } 
  }

  return answer;
}

let student =[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(student));