function solution(bridge_length, weight, truck_weights) {
  let answer = 0;

  let bridge = Array.from({ length: bridge_length }, () => 0); // bridge_length 만큼의 길이에 모든 값이 0으로 초기화된 배열
  let total_weight = 0; // 현재 다리 위에 올라가있는 무게

  while (truck_weights.length) {
    answer++;
    total_weight -= bridge.shift();
    if (total_weight + truck_weights[0] > weight) {
      bridge.push(0);
    } else {
      const curTruck = truck_weights.shift();
      bridge.push(curTruck);
      total_weight += curTruck;
    }
  }

  return answer + bridge_length;
}

const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];
console.log(solution(bridge_length, weight, truck_weights));
