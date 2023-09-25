function solution(weights) {
  let answer = 0;
  const store = {}; //key-value
  const ratio = [1, 3 / 2, 2, 4 / 3]; //경우의 수 (1,1), (2,3), (2,4), (3,4)

  //내림차순 정렬 후, 순회
  weights.sort((a, b) => b - a);

  weights.forEach((w) => {
    ratio.forEach((r) => {
      let s = w * r;
      if (store[s]) {
        //해당 비율을 곱한 값이 store에 존재할 경우
        answer += store[s];
      }
    });

    // 해당 무게를 키로 갖는 객체에 값 저장. (기존에 그 무게인 사람이 없으면 1, 있을 때는 +1)
    if (!store[w]) store[w] = 1;
    else store[w]++;
  });

  return answer;
}

const weights = [100, 180, 360, 100, 270];
console.log(solution(weights));
