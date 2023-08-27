function solution(n, arr) {
  let answer= '';
  let max = Number.MIN_SAFE_INTEGER;

  for (let i=0; i<n; i++) {
    if (max < arr[i].length) {
      max = arr[i].length;
      answer = arr[i];
    }
  }
  
  return answer;
}

let num = 6;
let arr = ["teacher", "abcdefghijkl", "time", "student", "beautiful", "good"];
console.log(solution(num, arr));