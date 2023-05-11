// VSC TC 1:
// const info = '4 6';
// const rest = ['101111', '101010', '101011', '111011'];

const [info, ...rest] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [yMax, xMax] = info.split(' ');
const maze = rest.map(row => row.split('').map(num => +num));
const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const solution = () => {
  const stack = [[0, 0, 1]];

  while (stack.length) {
    const [x, y, count] = stack.shift();

    dir.forEach(direction => {
      const xPosition = x + direction[0];
      const yPosition = y + direction[1];

      if (xPosition >= 0 && yPosition > -1 && xPosition < xMax && yPosition < yMax) {
        if (maze[yPosition][xPosition] === 1) {
          maze[yPosition][xPosition] = count + 1;
          stack.push([xPosition, yPosition, count + 1]);
        }
      }
    });
  }

  return maze[yMax - 1][xMax - 1];
};

console.log(solution());
