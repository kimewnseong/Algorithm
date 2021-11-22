function solution(s) {
  let answer='';
  let mid = Math.floor(s.length/2);
  
  // // 홀수
  // if(s.length%2) answer = s.substring(mid, mid+1);
  // // 짝수
  // else answer = s.substring(mid-1, mid+1);

  // 홀수
  if(s.length%2) answer = s.substr(mid, 1);
  // 짝수
  else answer = s.substr(mid-1, 2);

  return answer;
}

let str1 = "study";
let str2 = "evenString";
console.log("문자열 길이가 홀수 : ", solution(str1));
console.log("문자열 길이가 짝수 : ", solution(str2));
