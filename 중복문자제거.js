function solution(s) {
  let answer='';
  
  for (let i = 0; i<s.length; i++) {
    if ( i === s.indexOf(s[i])) answer += s[i];
  }

  return answer;

  // 번외 : 특정 문자의 개수 찾기
  // let num = 0;
  // let pos = s.indexOf('k');  // k 위치

  // while (pos !== -1) {
  //   num += 1;
  //   pos = s.indexOf('k', pos+1);
  // }
  // return num;
}

let str = "ksekksetttttkeeesrrrroooorrrqqqp";
console.log(solution(str));