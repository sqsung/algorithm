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
const [BOX_X, BOX_Y] = info.split(' ').map(val => +val);
const box = input.map(row => row.split(' ').map(val => +val));
const dirs = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const queue = new Queue();

for (let y = 0; y < BOX_Y; y++) {
  for (let x = 0; x < BOX_X; x++) {
    if (box[y][x] === 1) queue.push([x, y, 0]);
  }
}

let daysNeeded = 0;

while (!queue.isEmpty()) {
  const [x, y, days] = queue.front();
  queue.shift();

  dirs.forEach(dir => {
    const xPos = x + dir[0];
    const yPos = y + dir[1];

    if (xPos < 0 || yPos < 0 || xPos >= BOX_X || yPos >= BOX_Y || box[yPos][xPos] !== 0) return;

    box[yPos][xPos] = 1;
    queue.push([xPos, yPos, days + 1]);

    daysNeeded = daysNeeded < days + 1 ? days + 1 : daysNeeded;
  });
}

box.forEach(row => {
  if (row.includes(0)) daysNeeded = -1;
});

console.log(daysNeeded);
