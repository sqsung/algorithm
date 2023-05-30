const getDistances = () => {
  const [info, ...input] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

  const [Y, X] = info.split(' ').map(val => +val);
  const board = input.map(row => row.split(' ').map(val => (val === '0' ? 0 : val === '2' ? 2 : -1)));
  const visited = Array.from({ length: Y }).map(() => Array.from({ length: X }, () => false));
  // prettier-ignore
  const dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  const queue = [];

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (board[y][x] !== 2) continue;

      queue.push([x, y, 0]);
      break;
    }
  }

  while (queue.length) {
    const [x, y, time] = queue.shift();

    board[y][x] = time;

    for (let i = 0; i < 4; i++) {
      const xPos = x + dirs[i][0];
      const yPos = y + dirs[i][1];

      if (xPos < 0 || yPos < 0 || xPos >= X || yPos >= Y || board[yPos][xPos] === 0 || visited[yPos][xPos]) continue;

      visited[yPos][xPos] = true;

      board[yPos][xPos] = time + 1;
      queue.push([xPos, yPos, time + 1]);
    }
  }

  return board.map(row => row.join(' ')).join('\n');
};

console.log(getDistances());
