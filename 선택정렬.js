function solution(list) {
  let n = list.length;

  for (let i = 0; i < n; i++) {
    let minVal = list[i]; // 가장 작은 값을 저장하기 위한 변수
    let minIdx = i; // 가장 작은 값의 인덱스를 저장하기 위한 변수
    for (let j = i+1; j < n; j++) {
      if (list[j] < minVal) {
        minVal = list[j];
        minIdx = j;
      }
    }
    
    [list[i], list[minIdx]] = [list[minIdx], list[i]]
  }

  return list;
}

let arr = [13, 5, 11, 7, 23, 15];

console.log(solution(arr).join(" "));
