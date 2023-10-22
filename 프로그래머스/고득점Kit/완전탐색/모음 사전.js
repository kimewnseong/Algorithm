function solution(word) {
  const result = [];
  const str = '';

  for (let i = 1; i <= 5; i++) {
    dfs(str, i, result);
  }

  // 모든 단어를 만들어 정렬 후 인덱스를 찾음
  console.log(result);
  return result.sort().indexOf(word) + 1;
}

// 모든 단어의 조합 만들기
const dfs = (word, length, result) => {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  if (word.length === length) {
    result.push(word);
    return;
  }
  vowels.forEach((vowel) => {
    dfs(word + vowel, length, result);
  });
};

let word = 'AAAAE';
console.log(solution(word));
