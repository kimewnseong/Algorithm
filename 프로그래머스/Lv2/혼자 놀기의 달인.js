function makeGroup(idx, isOpen, cards) {
  let group = [];
  let check = idx;

  while (isOpen[check] === false) {
    isOpen[check] = true;
    group.push(cards[check]);
    check = cards[check] - 1;
  }
  return group;
}

function solution(cards) {
  let answer = 0;

  let n = cards.length;

  for (let i = 0; i < n; i++) {
    let isOpen = Array.from({ length: n }, () => false);

    let groupOne = makeGroup(i, isOpen, cards);

    for (let j = 0; j < cards.length; j++) {
      if (isOpen[j]) {
        // 이미 열려있으면 다음으로
        continue;
      }
      let groupTwo = makeGroup(j, isOpen, cards);

      answer = Math.max(answer, groupOne.length * groupTwo.length);
    }
  }

  return answer;
}

const cards = [8, 6, 3, 7, 2, 5, 1, 4];
console.log(solution(cards));
