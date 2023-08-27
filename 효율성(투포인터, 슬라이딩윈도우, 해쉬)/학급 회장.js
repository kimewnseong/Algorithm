function solution(students) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  let candidate = new Map();

  for (let student of students) {
    // 이미 나온 학생이면
    if (candidate.has(student))
      candidate.set(student, candidate.get(student) + 1);
    // 아직 이름이 안 나온 학생이면
    else candidate.set(student, 1);
  }

  for (let [key, val] of candidate) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

let students = "BACBACCACCBDEDE";
console.log(solution(students));
