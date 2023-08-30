function solution(list) {
  let n = list.length;

  for (let i = 1; i < n; i++) {
    let j;
    let tmp = list[i]; // 7
    for (j = i - 1; j >= 0; j--) {
      if (list[j] > tmp) {
        list[j + 1] = list[j];
      } else {
        break;
      }
    }
    list[j + 1] = tmp;
  }
  return list;
}

let arr = [11, 7, 5, 6, 10, 9, 1, 9, 11, 12, 4, 28, 2];
console.log(solution(arr).join(" "));
