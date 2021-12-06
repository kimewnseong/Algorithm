function isPrime(num) {
  if (num === 1) return false;
  // 제곱근까지만 봐도됨. 또는 절반까지
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  // 뒤집은 배열 만들기
  let reverseArray = arr.map((v) =>
    Number((v + "").split("").reverse().join(""))
  );

  let prime = reverseArray.filter((v) => isPrime(v));

  return prime.join(" ");
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(solution(arr));
