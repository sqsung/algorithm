const N = '5';
const drawing = ['RRRBB', 'GGBBB', 'BBBRR', 'BBRRR', 'RRRRR'];

// const [N, ...drawing] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// prettier-ignore
const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

const getCounts = (colorblind = false) => {
  const checked = Array.from({ length: N }).map(_ => Array.from({ length: N }, () => false));

  let count = 0;
  const queue = [];

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (checked[y][x]) continue;

      checked[y][x] = true;
      count += 1;
      queue.push([x, y]);

      while (queue.length) {
        const [x, y] = queue.shift();

        dirs.forEach(dir => {
          const xPos = x + dir[0];
          const yPos = y + dir[1];

          if (xPos < 0 || yPos < 0 || xPos >= N || yPos >= N || checked[yPos][xPos]) return;

          if (!colorblind) {
            if (drawing[y][x] !== drawing[yPos][xPos]) return;

            checked[yPos][xPos] = true;
            queue.push([xPos, yPos]);
          } else if (
            drawing[y][x] === drawing[yPos][xPos] ||
            (drawing[y][x] === 'R' && drawing[yPos][xPos] === 'G') ||
            (drawing[y][x] === 'G' && drawing[yPos][xPos] === 'R')
          ) {
            checked[yPos][xPos] = true;
            queue.push([xPos, yPos]);
          }
        });
      }
    }
  }

  return count;
};

console.log(`${getCounts()} ${getCounts(true)}`);
