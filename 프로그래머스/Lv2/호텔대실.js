function timeToMinutes(time) {
  let [startTime, endTime] = time;
  let [startHour, startMinutes] = startTime.split(":");
  let [endHour, endMinuted] = endTime.split(":");

  startMinutes = parseInt(startHour) * 60 + parseInt(startMinutes);
  endMinuted = parseInt(endHour) * 60 + parseInt(endMinuted);

  return [startMinutes, endMinuted];
}

function solution(book_time) {
  let answer = 0;
  let rooms = []; // 방 별로 이전 사용자의 퇴실시간 + 치우는 시간(10분)을 담음

  // 예약시간 분 단위로 변경
  book_time = book_time.map((time) => timeToMinutes(time));
  // 빨리 입실순으로 정렬
  book_time.sort((a, b) => a[0] - b[0]);

  // 가장 먼저 입실한 사람의 퇴실 시간 + 10
  rooms.push([book_time[0][1] + 10]);

  for (let i = 1; i < book_time.length; i++) {
    let [currentStartTime, currentEndTime] = book_time[i];

    // 방을 순회하며 그 방의 마지막 퇴실 시간보다 현재 입실시간이 늦은 곳을 찾는다.
    let possibleRoomIdx = rooms.findIndex(
      (room) => room[room.length - 1] <= currentStartTime
    );

    if (possibleRoomIdx === -1) {
      // 그런 방을 못찾으면 새로운 방을 추가(그 방의 퇴실시간을 담음)
      rooms.push([currentEndTime + 10]);
    } else {
      // 찾으면 그 방의 퇴실시간 갱신
      rooms[possibleRoomIdx].push(currentEndTime + 10);
    }
  }

  answer = rooms.length;
  return answer;
}

const book_time = [
  ["15:00", "17:00"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:20"],
  ["18:20", "21:20"],
];

console.log(solution(book_time));
