// 연속된 n일 동안 값들의 최댓값
function solution(arr, n) {
  let result = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (i >= n) {
      // i가 n보다  커지면
      sum -= arr[i - n]; // sum에서 가장 가장 최근에 더한 값의 n번째 전 인덱스의 값을 빼줌.
    }
    result = Math.max(result, sum);
  }
  return result;
}

let moneys = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
let n = 3;
console.log(solution(moneys, n));
