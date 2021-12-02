function solution(s) { 
      let flag = true;

      function isAlphabet(str) {
        let new_str = '';

        for (let i = 0; i < str.length; i++) {
          if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 ||
            str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
              new_str += str[i];
            }
        }
        return new_str;
      }
      
      s = isAlphabet(s);
      s = s.toUpperCase();
      let n = s.length/2;

      for (let i = 0; i < n; i++) {
        if (s[i] !== s[s.length-i-1]) {
          flag = false;
          break;
        }
      }
      
      if (flag) return 'YES';

      return 'NO';
    }

    let str = "found7, time: study; Yduts; emit, 7Dnuof";
    console.log(solution(str));