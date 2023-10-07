const solution = (queue1, queue2) => {
  let sum1 = queue1.reduce((prev, cur) => prev + cur, 0);
  let sum2 = queue2.reduce((prev, cur) => prev + cur, 0);
  const target = (sum1 + sum2) / 2;

  const queue = [...queue1, ...queue2];
  let left = 0;
  let right = queue1.length;

  for (let cnt = 0; cnt < queue1.length * 3; cnt++) {
    if (sum1 === target) {
      return cnt;
    }
    if (sum1 > target) {
      sum1 -= queue[left++];
    } else {
      sum1 += queue[right++];
    }
  }

  return -1;
};

const queue1 = [1, 2, 1, 2];
const queue2 = [1, 10, 1, 2];
console.log(solution(queue1, queue2));
