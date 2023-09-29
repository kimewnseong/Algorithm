function solution(k, tangerine) {
  let answer = 0;
  let tangerineObj = {};

  for (let i = 0; i < tangerine.length; i++) {
    let currentSize = [tangerine[i]];
    if (tangerineObj[currentSize]) {
      tangerineObj[currentSize]++;
    } else {
      tangerineObj[currentSize] = 1;
    }
  }

  // 귤 개수 내림차순정렬
  const sortedTangerineArr = Object.values(tangerineObj).sort((a, b) => b - a);
  let sum = 0;
  let count = 0;
  for (let i = 0; i < sortedTangerineArr.length; i++) {
    sum += sortedTangerineArr[i];
    count++;
    if (sum >= k) {
      answer = count;
      break;
    }
  }
  return answer;
}

const k = 6;
const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];
console.log(solution(k, tangerine));
