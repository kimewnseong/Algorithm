// 연속 부분 수열의 합이 N 이하가 되는 경우의 수
function solution(arr, target) {
  let answer = 0;
  let leftP = 0;
  let sum = 0;

  for (let rightP = 0; rightP < arr.length; rightP++) {
    sum += arr[rightP];

    while (sum > target) {
      sum -= arr[leftP++];
    }
    answer += rightP - leftP + 1; // 값이 추가될 때 마다 더해짐
  }
  return answer;
}

let N = 5;
let numList = [1, 3, 1, 2, 3];
console.log(solution(numList, N));
