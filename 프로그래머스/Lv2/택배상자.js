function solution(order) {
  let answer = 0;

  const sub = []; // 보조 컨테이너 벨트
  let idx = 0; // 택배 상자 index

  for (let i = 1; i <= order.length; i++) {
    if (order[idx] !== i) {
      sub.push(i);
    } else {
      idx++;
      answer++;
    }

    // 보조 컨테이너 벨트 순회
    while (sub.length !== 0 && sub.at(-1) === order[idx]) {
      sub.pop();
      idx++;
      answer++;
    }
  }

  return answer;
}

const order = [4, 3, 1, 2, 5];
console.log(solution(order));
