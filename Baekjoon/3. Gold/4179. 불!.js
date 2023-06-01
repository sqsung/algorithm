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
  }

  front() {
    return this.q[this.head];
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

const [info, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [Y, X] = info.split(' ').map(val => +val);
// prettier-ignore
const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

const fireRoute = input.map(row => [...row]);

const getFireSpreadTimes = () => {
  const checked = Array.from({ length: Y }).map(_ => Array.from({ length: X }, () => false));
  const fires = new Queue();

  for (let y = 0; y < Y; y++) {
    for (let x = 0; x < X; x++) {
      if (fireRoute[y][x] !== 'F') continue;

      fires.push([x, y, 0]);
      checked[y][x] = true;
    }
  }

  while (!fires.isEmpty()) {
    const [x, y, time] = fires.front();
    fires.shift();

    fireRoute[y][x] = time;

    for (let i = 0; i < 4; i++) {
      const dir = dirs[i];

      const xPos = x + dir[0];
      const yPos = y + dir[1];

      if (xPos < 0 || yPos < 0 || xPos >= X || yPos >= Y || checked[yPos][xPos] || fireRoute[yPos][xPos] === '#')
        continue;

      fireRoute[yPos][xPos] = time + 1;
      checked[yPos][xPos] = true;
      fires.push([xPos, yPos, time + 1]);
    }
  }
};

const getEscapeTime = () => {
  getFireSpreadTimes();

  const checked = Array.from({ length: Y }).map(_ => Array.from({ length: X }, () => false));

  for (let x = 0; x < X; x++) {
    for (let y = 0; y < Y; y++) {
      if (input[y][x] !== 'J') continue;

      const queue = new Queue();
      queue.push([x, y, 0]);

      while (!queue.isEmpty()) {
        const [x, y, time] = queue.front();
        queue.shift();

        for (let i = 0; i < 4; i++) {
          const dir = dirs[i];

          const xPos = x + dir[0];
          const yPos = y + dir[1];

          if (xPos < 0 || yPos < 0 || yPos >= Y || xPos >= X) return time + 1;

          if (checked[yPos][xPos] || fireRoute[yPos][xPos] === '#' || fireRoute[yPos][xPos] <= time + 1) continue;

          checked[yPos][xPos] = true;
          queue.push([xPos, yPos, time + 1]);
        }
      }
    }
  }

  return 'IMPOSSIBLE';
};

console.log(getEscapeTime());
