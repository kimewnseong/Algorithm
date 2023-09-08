function solution(routes) {
  let answer = 0;
  let camera = -30001;

  routes.sort((a, b) => a[1] - b[1]); // 빨리 빠져나가는 순으로 정렬

  routes.forEach((r) => {
    // 이전 카메라 위치보다 진입이 느리면 새로운 카메라 설치
    if (camera < r[0]) {
      camera = r[1];
      answer += 1;
    }
  });

  return answer;
}

let routes = [
  [-20, -15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
];

console.log(solution(routes));
