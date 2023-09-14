function solution(picks, minerals) {
  let answer = 0;
  let [dia, iron, stone] = picks; // 각 곡괭이의 갯수

  let mLength = minerals.length;
  let mineralCount = [];

  // 광물들을 앞에서부터 다섯개씩 자름
  for (let i = 0; i < parseInt(mLength / 5) + 1; i++) {
    let mineral = [0, 0, 0];
    for (let j = i * 5; j < i * 5 + 5; j++) {
      if (minerals[j]) {
        if (minerals[j] === "diamond") mineral[0]++;
        else if (minerals[j] === "iron") mineral[1]++;
        else if (minerals[j] === "stone") mineral[2]++;
      } else {
        break;
      }
    }
    mineralCount.push(mineral);
  }

  // 곡괭이가 있어야 광물을 캘 수 있으므로 5개씩 묶은 광물들을 곡괭이 갯수만큼 자른 후
  // 다이아몬드 개수를 기준으로 내림차순
  let sameCountPickAndMineral = mineralCount
    .splice(0, dia + iron + stone)
    .sort((a, b) => {
      if (a[0] === b[0]) return b[1] - a[1];
      else return b[0] - a[0];
    });

  for (let i = 0; i < sameCountPickAndMineral.length; i++) {
    let [di, ir, st] = sameCountPickAndMineral[i];

    if (dia) {
      answer += di + ir + st;
      dia--;
    } else if (iron) {
      answer += di * 5 + (ir + st);
      iron--;
    } else if (stone) {
      answer += di * 25 + ir * 5 + st;
      stone--;
    }
  }

  return answer;
}

const picks = [0, 1, 1];
const minerals = [
  "diamond",
  "diamond",
  "diamond",
  "diamond",
  "diamond",
  "iron",
  "iron",
  "iron",
  "iron",
  "iron",
  "diamond",
];

console.log(solution(picks, minerals));
