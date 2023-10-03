function solution(want, number, discount) {
  let answer = 0;

  let n = want.length;
  let hopeObj = {};

  // 원하는 품목과 개수 객체
  for (let i = 0; i < n; i++) {
    hopeObj[want[i]] = number[i];
  }

  // i를 시작날짜로 해서 열흘간의 아이템들을 객체 형태로 만들어줌
  for (let i = 0; i <= discount.length - 10; i++) {
    let count = 0;
    let tenDaysItem = discount.slice(i, i + 10);
    let tenDaysItemObj = {};
    for (let j = 0; j < tenDaysItem.length; j++) {
      tenDaysItemObj[tenDaysItem[j]] = tenDaysItemObj[tenDaysItem[j]]
        ? tenDaysItemObj[tenDaysItem[j]] + 1
        : 1;
    }

    // 원하는 품목과 열흘 간 세일하는 품목이 같으면 count + 1
    for (const item of Object.keys(tenDaysItemObj)) {
      if (tenDaysItemObj[item] === hopeObj[item]) count++;
    }

    // count가 원하는 품목의 개수와 같으면 answer + 1
    if (count === n) answer++;
  }
  return answer;
}

const want = ['banana', 'apple', 'rice', 'pork', 'pot'];
const number = [3, 2, 2, 2, 1];
const discount = [
  'chicken',
  'apple',
  'apple',
  'banana',
  'rice',
  'apple',
  'pork',
  'banana',
  'pork',
  'rice',
  'pot',
  'banana',
  'apple',
  'banana',
];
console.log(solution(want, number, discount));
