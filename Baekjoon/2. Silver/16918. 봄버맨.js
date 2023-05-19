// const info = '6 7 5';
// const input = ['.......', '...O...', '....O..', '.......', 'OO.....', 'OO.....'];

const [info, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [Y, X, N] = info.split(' ').map(val => +val);
const maxBombBoard = Array.from({ length: Y }).fill('O'.repeat(X)).join('\n');
const board = input.map(row => [...row]);
// prettier-ignore
const dirs = [ [0, 1], [0, -1], [-1, 0], [1, 0] ];

const initialize = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'O') board[i][j] = 0;
    }
  }
};

const explode = (x, y, bombTime) => {
  board[y][x] = '.';

  for (let i = 0; i < 4; i++) {
    const xPos = x + dirs[i][0];
    const yPos = y + dirs[i][1];

    if (xPos < 0 || yPos < 0 || xPos >= X || yPos >= Y) continue;

    if (bombTime !== +board[yPos][xPos]) board[yPos][xPos] = '.';
  }
};

const tick = () => {
  if (N % 2 === 0) return maxBombBoard;

  for (let i = 1; i <= N; i++) {
    if (i === 1) {
      initialize();

      continue;
    } else if (i % 2 === 0) {
      for (let y = 0; y < board.length; y++) {
        board[y] = board[y].map(string => (string === '.' ? i : string));
      }
    } else {
      for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
          if (i - +board[y][x] === 3) {
            explode(x, y, +board[y][x]);
          }
        }
      }
    }
  }

  return board.map(row => row.map(string => (string === '.' ? string : 'O')).join('')).join('\n');
};

console.log(tick());
