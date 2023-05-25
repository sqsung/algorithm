// prettier-ignore
const [subin, sister] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(val => +val);

const visited = Array.from({ length: 100001 }, () => false);
const path = Array.from({ length: 100001 }, () => -1);

const moveSubin = N => {
  const queue = [[N, 0]];
  visited[N] = true;

  while (queue.length) {
    const [current, time] = queue.shift();

    if (current === sister) return time;

    [current - 1, current + 1, current * 2].forEach(move => {
      if (visited[move] || move < 0 || move > 100001) return;

      visited[move] = true;
      path[move] = current;

      queue.push([move, time + 1]);
    });
  }
};

const getOrder = () => {
  const order = [sister];
  let previous = path[sister];

  for (let i = 0; i < minimunTime; i++) {
    order.push(previous);

    previous = path[previous];
  }

  return order.reverse().join(' ');
};

console.log(moveSubin(subin));
console.log(getOrder());
