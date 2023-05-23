const [info, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [Y, X] = info.split(' ').map(val => +val);
const board = input.map(row => [...row.split(' ').map(val => +val)]);
const checked = Array.from({ length: Y }, () => Array.from({ length: X }, () => false));
// prettier-ignore
const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0],];
const drawings = [];

const measureDrawingSize = (x, y) => {
  let size = 1;
  const queue = [[x, y]];

  while (queue.length) {
    const [x, y] = queue.shift();

    dirs.forEach(dir => {
      const xPos = dir[0] + x;
      const yPos = dir[1] + y;

      if (xPos >= 0 && yPos >= 0 && xPos < X && yPos < Y && board[yPos][xPos] && !checked[yPos][xPos]) {
        checked[yPos][xPos] = true;
        size += 1;
        queue.push([xPos, yPos]);
      }
    });
  }

  return size;
};

for (let y = 0; y < Y; y++) {
  for (let x = 0; x < X; x++) {
    if (!board[y][x] || checked[y][x]) continue;

    checked[y][x] = true;
    drawings.push(measureDrawingSize(x, y));
  }
}

console.log(drawings.length ?? 0);
console.log(drawings.length ? Math.max(...drawings) : 0);
