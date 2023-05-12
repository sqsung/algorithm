// VSC TC:
// let size = 7;
// const input = ['0110100', '0110101', '1110101', '0000111', '0100000', '0111110', '0111000'];

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//prettier-ignore
const dirs = [[1, 0], [1, 0], [0, 1], [0, -1]];

let size = +input.shift();
let houses = input.map(row => row.split('').map(num => +num));
let housesByNeighborhood = [];

const solution = () => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (houses[i][j]) search(i, j);
    }
  }
};

const search = (startX, startY) => {
  let result = 0;
  const queue = [[startX, startY]];

  while (queue.length) {
    const [x, y] = queue.shift();

    if (!houses[x][y]) continue;

    houses[x][y] = 0;
    result += 1;

    for (let i = 0; i < dirs.length; i++) {
      const xPosition = x + dirs[i][0];
      const yPosition = y + dirs[i][1];

      if (xPosition < 0 || yPosition < 0 || xPosition >= size || yPosition >= size) continue;

      if (houses[xPosition][yPosition]) queue.push([xPosition, yPosition]);
    }
  }

  housesByNeighborhood.push(result);
};

solution();

console.log(housesByNeighborhood.length);

housesByNeighborhood
  .sort((a, b) => a - b)
  .forEach(num => {
    console.log(num);
  });
