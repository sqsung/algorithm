// VSC TC:
// const buildingHeight = 10;
// const kangho = 1;
// const startlink = 10;
// const up = 2;
// const down = 1;

const [buildingHeight, kangho, startlink, up, down] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(val => +val);
const visited = Array.from({ length: buildingHeight }, () => false);

const bfsElevator = N => {
  const queue = [[N, 0]];
  visited[N] = true;

  while (queue.length) {
    const [kanghoCurrent, elevator] = queue.shift();

    if (kanghoCurrent === startlink) return elevator;

    [kanghoCurrent + up, kanghoCurrent - down].forEach(floor => {
      if (visited[floor] || floor < 1 || floor > buildingHeight) return;

      visited[floor] = true;

      queue.push([floor, elevator + 1]);
    });
  }
  return 'use the stairs';
};

console.log(bfsElevator(kangho));
