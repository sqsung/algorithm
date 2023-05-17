// const info = '6 6';
// const input = ['..S...', '..S.W.', '.S....', '..W...', '...W..', '......'];

const [info, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [Y, X] = info.split(' ').map(val => +val);
const farm = input.map(row => [...row]);

const dirs = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];

const isSheepSafe = (x, y) => {
  let safety = true;

  dirs.forEach(dir => {
    const xPos = dir[0] + x;
    const yPos = dir[1] + y;

    if (xPos >= 0 && yPos >= 0 && xPos < X && yPos < Y) {
      if (farm[yPos][xPos] === 'W') safety = false;
    }
  });

  return safety;
};

const blockWolves = () => {
  for (let y = 0; y < farm.length; y++) {
    const row = farm[y];

    for (let x = 0; x < row.length; x++) {
      if (row[x] === 'S') {
        const safety = isSheepSafe(x, y);

        if (!safety) return 0;
      }
    }
  }

  const maxSafetyFarm = farm.map(row => {
    return row.join('').replaceAll('.', 'D');
  });

  return '1' + '\n' + maxSafetyFarm.join('\n');
};

console.log(blockWolves());
