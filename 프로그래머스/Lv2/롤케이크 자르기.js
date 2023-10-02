function solution(topping) {
  let answer = 0;

  // 맨 처음 한쪽이 다 가지고있다고 생각하고 시작
  const me = {};
  const brother = topping.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  let meCount = 0;
  let brotherCount = new Set(topping).size;

  // 하니씩 옮기면서 토핑개수 비교
  for (let i = 0; i < topping.length - 1; i++) {
    const curTopping = topping[i];
    // 토핑을 옮겼을 때, 기존에 갖고있던게 아니면 토핑개수 + 1
    if (!me[curTopping]) {
      meCount++;
    }
    me[curTopping] = me[curTopping] ? me[curTopping] + 1 : 1;

    brother[curTopping]--;
    // 옮기고나서 해당 토핑이 없으면 토핑개수 -1
    if (!brother[curTopping]) {
      brotherCount--;
    }

    // 토핑개수가 같으면 answer + 1
    if (meCount === brotherCount) {
      answer++;
    }
  }

  return answer;
}

// 시간초과
function arrToObj(topping) {
  const cake = {};

  for (let i = 0; i < topping.length; i++) {
    const currentTopping = topping[i];
    if (cake[currentTopping]) cake[currentTopping]++;
    else cake[currentTopping] = 1;
  }
  return cake;
}
function solution2(topping) {
  let answer = 0;

  for (let i = 1; i <= topping.length - 1; i++) {
    let me = Object.keys(arrToObj(topping.slice(0, i)));
    let brother = Object.keys(arrToObj(topping.slice(i)));

    if (me.length === brother.length) {
      answer++;
    }
  }
  return answer;
}

const topping = [1, 2, 1, 3, 1, 4, 1, 2];
console.log(solution(topping));
