function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function solution(nums) {
  let answer = 0;
  let size = nums.length;

  for (let i = 0; i < size - 2; i++) {
    for (let j = i + 1; j < size - 1; j++) {
      for (let k = j + 1; k < size; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          answer++;
        }
      }
    }
  }

  return answer;
}
