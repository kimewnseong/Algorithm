function solution(list) {
  let n = list.length;

  for (let i = 0; i < n-1; i++) {
    for (let j = 1; j < n-i; j++) {
      if (list[j-1] > list[j]) {
        [list[j-1], list[j]] = [list[j], list[j-1]];
      }
    }
  }
  return list;
}

let arr = [13, 5, 11, 7, 23, 15];

console.log(solution(arr).join(" "));
