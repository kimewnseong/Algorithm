function solution(str) {
  let answer = 0;
  
  for (let x of str) {
    //아스키 값
    // 대문자: 65~90
    // 소문자: 97~122
    // let num = x.charCodeAt();  
    // if(num>=65 && num<=90) answer += 1;
    
    if (x === x.toUpperCase()) answer += 1;
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));