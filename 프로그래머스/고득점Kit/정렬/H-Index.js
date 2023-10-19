function solution(citations) {
  let answer = 0;
  const n = citations.length;

  citations.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    if (citations[i] >= i + 1) answer++;
    else break;
  }

  return answer;
}

const citations = [3, 0, 6, 1, 5];
console.log(solution(citations));
