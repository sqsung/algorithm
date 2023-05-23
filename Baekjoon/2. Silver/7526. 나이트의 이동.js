const N = '3';
const input = ['8', '0 0', '7 0', '100', '0 0', '30 50', '10', '1 1', '1 1'];
// const N = '1';
// const input = ['8', '0 0', '7 0'];

// const [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = input => {
  // prettier-ignore
  const moves = [[-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2]];
  const testCases = [];
  const answers = [];

  for (let i = 0; i < +N; i++) {
    const [board, start, end] = input.splice(0, 3);
    const tcObject = { board: +board, start: start.split(' ').map(val => +val), end: end.split(' ').map(val => +val) };

    testCases.push(tcObject);
  }

  for (let i = 0; i < +N; i++) {
    const { board, start, end } = testCases[i];
    const checked = Array.from({ length: board }, () => Array.from({ length: board }, () => false));
    const queue = [[...start, 0]];

    while (queue.length) {
      const [x, y, count] = queue.shift();

      if (x === end[0] && y === end[1]) {
        answers.push(count);
        break;
      }

      checked[y][x] = true;

      moves.forEach(move => {
        const xPos = x + move[0];
        const yPos = y + move[1];

        if (xPos < 0 || yPos < 0 || xPos >= board || yPos >= board || checked[yPos][xPos]) return;

        checked[yPos][xPos] = true;

        queue.push([xPos, yPos, count + 1]);
      });
    }
  }

  return answers.join('\n');
};

console.log(solution(input));
