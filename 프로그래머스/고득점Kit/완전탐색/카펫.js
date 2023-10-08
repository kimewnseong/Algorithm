function solution(brown, yellow) {
  let total = brown + yellow;

  // 카펫의 높이는 3부터 시작 (위에서부터 최소 갈색, 노란색, 갈색)
  for (let height = 3; height <= total; height++) {
    if (total % height === 0) {
      let width = total / height;
      if ((height - 2) * (width - 2) === yellow && width >= height) {
        return [width, height];
      }
    }
  }
}

const brown = 10;
const yellow = 2;
console.log(solution(brown, yellow));
