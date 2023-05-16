// const N = '1';
// const input = ['5 3 6', '0 2', '1 2', '2 2', '3 2', '4 2', '4 0'];

const [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const dirs = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];

const farms = [];
let TC = +N;

(() => {
  while (TC--) {
    const [X, Y, CabbageCount] = input
      .splice(0, 1)
      .join('')
      .split(' ')
      .map(val => +val);

    const organizedFarm = Array.from({ length: Y });

    for (let i = 0; i < Y; i++) {
      const array = new Array(X).fill(0);

      organizedFarm[i] = array;
    }

    const farmInfo = input.splice(0, CabbageCount);

    farmInfo.forEach(info => {
      const [x, y] = info.split(' ').map(val => +val);

      organizedFarm[y][x] = 1;
    });

    farms.push({ info: [X, Y, CabbageCount], organizedFarm });
  }
})();

const bfsSearch = (farm, x, y) => {
  const { info, organizedFarm: f } = farm;
  const [X, Y, _] = info;

  const queue = [[x, y]];

  while (queue.length) {
    const [x, y] = queue.shift();

    if (!f[y][x]) continue;

    f[y][x] = 0;

    for (let i = 0; i < dirs.length; i++) {
      const xPos = x + dirs[i][0];
      const yPos = y + dirs[i][1];

      if (xPos < 0 || yPos < 0 || xPos >= X || yPos >= Y) continue;

      if (f[yPos][xPos]) queue.push([xPos, yPos]);
    }
  }
};

const getMinimumWorms = farm => {
  let worms = 0;

  const { organizedFarm: f } = farm;

  for (let y = 0; y < f.length; y++) {
    for (let x = 0; x < f[y].length; x++) {
      if (!f[y][x]) continue;

      bfsSearch(farm, x, y);
      worms += 1;
    }
  }

  return worms;
};

let answer = [];

farms.forEach(farm => {
  answer.push(getMinimumWorms(farm));
});

console.log(answer.join('\n'));
