function solution(s) {
  let answer = '';
  // let answer=s.toUpperCase();

  // for (let x of s) {
  //   let num = x.charCodeAt();

  //   if(num>=97 && num<=122) answer+=String.fromCharCode(num-32);
  //   else answer+= x;
  // }

  for (let x of s) {
    if(x === x.toLowerCase()) x=x.toUpperCase();

    answer += x;
  }
  return answer;
}

let str = "ItisTimeToStudykys";
console.log(solution(str));