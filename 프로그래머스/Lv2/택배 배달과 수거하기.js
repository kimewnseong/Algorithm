function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let totalDelivery = deliveries.reduce((a, b) => a + b, 0);
  let totalPickUp = pickups.reduce((a, b) => a + b, 0);

  //배달해야하는 화물, 수거해야할 화물 모두 0이되면 종료
  while (totalDelivery !== 0 || totalPickUp !== 0) {
    deleteZero(deliveries);
    deleteZero(pickups);

    // 배달해야하거나 수거해야하는 곳 중 먼 곳은 무조건 방문해야함. 그 곳의 길이 왕복 (x 2)
    let move = Math.max(deliveries.length, pickups.length);
    answer += move * 2;
    totalDelivery -= deleteItem(deliveries, cap);
    totalPickUp -= deleteItem(pickups, cap);
  }
  return answer;
}

//뒤에서 부터 0이 있으면 제거해줌
const deleteZero = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) arr.pop();
    else return;
  }
};

// 먼 거리에서 부터 제거해서 제거한 아이템 개수 리턴
// ex) 0 3 3에 cap: 4 => 0 2 0
const deleteItem = (arr, cap) => {
  let remove = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= cap) {
      arr[i] -= cap;
      remove += cap;
      break;
    } else {
      cap -= arr[i];
      remove += arr[i];
      arr[i] = 0;
    }
  }
  return remove;
};

const cap = 4;
const n = 5;
const deliveries = [1, 0, 3, 1, 2];
const pickups = [0, 3, 0, 4, 0];
console.log(solution(cap, n, deliveries, pickups));
