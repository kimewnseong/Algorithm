function solution(sequence, k) {
  let answer = [];
  let possibleArr = [];

  let sum = 0;
  let end = 0;

  // 인덱스를 시작점으로 해서 합이 k가 되는 구간을 찾아 possibleArr에 삽입
  for (let i = 0; i < sequence.length; i++) {
    // 구간의 합이 k보다 작고 end값이 sequence 길이 이내이면
    while (sum < k && end < sequence.length) {
      sum += sequence[end];
      end++;
    }

    if (sum === k) {
      possibleArr.push([i, end - 1]); // 위에서 end를 증가시켜놨으므로 i ~ end-1 구간
    }
    sum -= sequence[i];
  }

  // 구간의 간격이 짧은 순으로 저장
  possibleArr.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
  answer = possibleArr[0];

  return answer;
}

const sequence = [1, 2, 3, 4, 5];
const k = 7;

console.log(solution(sequence, k));
