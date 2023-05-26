// const info = '5 3 2';
// const input = ['0 0 0 0 0', '0 0 0 0 0', '0 0 0 0 0', '0 0 0 0 0', '0 0 1 0 0', '0 0 0 0 0'];

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
const [BOX_X, BOX_Y, BOX_COUNT] = info.split(' ').map(val => +val);
const _input = input.map(row => row.split(' ').map(val => +val));
const dirs = [
  [0, 0, 1],
  [0, 0, -1],
  [0, 1, 0],
  [0, -1, 0],
  [1, 0, 0],
  [-1, 0, 0],
];

const boxes = (() => {
  const separated = [];

  while (_input.length) {
    separated.push(_input.splice(0, BOX_Y));
  }

  return separated;
})();

const queue = new Queue();

for (let z = 0; z < BOX_COUNT; z++) {
  for (let y = 0; y < BOX_Y; y++) {
    for (let x = 0; x < BOX_X; x++) {
      if (boxes[z][y][x] === 1) queue.push([x, y, z, 0]);
    }
  }
}

let daysNeeded = 0;

while (!queue.isEmpty()) {
  const [x, y, z, days] = queue.front();
  queue.shift();

  dirs.forEach(dir => {
    const xPos = x + dir[0];
    const yPos = y + dir[1];
    const zPos = z + dir[2];

    if (
      xPos < 0 ||
      yPos < 0 ||
      zPos < 0 ||
      xPos >= BOX_X ||
      yPos >= BOX_Y ||
      zPos >= BOX_COUNT ||
      boxes[zPos][yPos][xPos] !== 0
    )
      return;

    boxes[zPos][yPos][xPos] = 1;
    queue.push([xPos, yPos, zPos, days + 1]);

    daysNeeded = daysNeeded < days + 1 ? days + 1 : daysNeeded;
  });
}

boxes.forEach(box => {
  box.map(row => {
    if (row.includes(0)) daysNeeded = -1;
  });
});

console.log(daysNeeded);
