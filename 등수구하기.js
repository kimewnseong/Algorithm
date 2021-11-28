function solution(a) {
  let n = a.length;
  let answer = Array.from({length: n}, () => 1);
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      if(a[i] < a[j]) answer[i]++; 
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
// let arr = [87, 92, 92, 92, 76];
// let arr = [100, 100, 100, 100, 100];


console.log(solution(arr));