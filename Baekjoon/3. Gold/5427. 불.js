class Queue {
  constructor() {
    this.q = [];
    this.head = 0;
    this.tail = 0;
  }

  push(item) {
    this.q[this.tail++] = item;
  }

  shift() {
    this.head++;
    return this.q[this.head - 1];
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

const [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const testCases = (() => {
  const cases = [];
  let testCaseCount = +N;

  while (testCaseCount--) {
    const [X, Y] = input
      .shift()
      .split(' ')
      .map(val => +val);

    cases.push({ X, Y, maze: input.splice(0, Y).map(row => [...row]) });
  }

  return cases;
})();

const setFireSpreadTimes = (q, testCase) => {
  const { X, Y, maze } = testCase;
  const fireRoute = maze.map(row => row.slice());
  const checked = Array.from({ length: Y }).map(_ => Array.from({ length: X }, () => false));

  while (!q.isEmpty()) {
    const [x, y, time] = q.shift();
    checked[y][x] = true;

    fireRoute[y][x] = time;

    for (let i = 0; i < 4; i++) {
      const xPos = x + dirs[i][0];
      const yPos = y + dirs[i][1];

      if (xPos < 0 || yPos < 0 || xPos >= X || yPos >= Y || checked[yPos][xPos] || maze[yPos][xPos] === '#') continue;

      fireRoute[yPos][xPos] = time + 1;
      checked[yPos][xPos] = true;
      q.push([xPos, yPos, time + 1]);
    }
  }

  return fireRoute;
};

const getEscapeTime = (x, y, testCase, fireRoute) => {
  const { X, Y } = testCase;
  const checked = Array.from({ length: Y }).map(_ => Array.from({ length: X }, () => false));

  const queue = new Queue();
  queue.push([x, y, 0]);

  while (!queue.isEmpty()) {
    const [x, y, time] = queue.shift();
    checked[y][x] = true;

    for (let i = 0; i < 4; i++) {
      const xPos = x + dirs[i][0];
      const yPos = y + dirs[i][1];

      if (xPos < 0 || yPos < 0 || yPos >= Y || xPos >= X) return time + 1;

      if (checked[yPos][xPos] || fireRoute[yPos][xPos] === '#' || fireRoute[yPos][xPos] <= time + 1) continue;

      checked[yPos][xPos] = true;
      queue.push([xPos, yPos, time + 1]);
    }
  }

  return 'IMPOSSIBLE';
};

const solution = () => {
  let answers = [];

  for (let i = 0; i < +N; i++) {
    const { X, Y, maze } = testCases[i];
    const fires = new Queue();

    for (let y = 0; y < Y; y++) {
      for (let x = 0; x < X; x++) {
        if (maze[y][x] === '*') fires.push([x, y, 0]);
      }
    }

    const fireRoute = setFireSpreadTimes(fires, testCases[i]);

    for (let ny = 0; ny < Y; ny++) {
      for (let nx = 0; nx < X; nx++) {
        if (maze[ny][nx] === '@') {
          answers.push(getEscapeTime(nx, ny, testCases[i], fireRoute));

          break;
        }
      }
    }
  }

  return answers.join('\n');
};

console.log(solution());
