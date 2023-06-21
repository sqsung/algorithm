class Queue {
  constructor(initValue) {
    this.q = initValue ? [initValue] : [];
    this.head = 0;
    this.tail = initValue ? 1 : 0;
  }

  push(item) {
    this.q[this.tail] = item;
    this.tail++;
  }

  shift() {
    this.head++;
    return this.q[this.head - 1];
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// prettier-ignore
const getRobotMoves = input => {
  const [Y, X] = input.shift().split(' ').map(val => +val);
  const [sY, sX, direction] = input.shift().split(' ').map(val => +val);
  const room = input.map(row => row.split(' ').map(val => +val));
  
  const cleaned = Array.from({ length: Y }).map(() => Array.from({ length: X }, () => false));
  const dirs = { 0: [0, -1], 1: [1, 0], 2: [0, 1], 3: [-1, 0] }; // 0: North, 1: East, 2: South, 3: West
  
  const q = new Queue([sX, sY, direction]); 
  let moves = 0;

  while (!q.isEmpty()) {
    let [x, y, direction] = q.shift(); 

    if (room[y][x] === 0 && !cleaned[y][x]) {
      moves += 1;
      cleaned[y][x] = true; 
    }

    for (let i = 0; i < 4; i++) {
      direction = direction - 1 < 0 ? (direction - 1) + 4 : direction - 1;
      const [newX, newY] = [x + dirs[direction][0], y + dirs[direction][1]];
      
      if (room[newY][newX] === 0 && !cleaned[newY][newX]) {
        q.push([newX, newY, direction]);
        break; 
      } 

      if (i === 3) {
        const back = direction - 2 < 0 ? (direction - 2) + 4 : direction - 2;
        const [backX, backY] = [x + dirs[back][0], y + dirs[back][1]];
    
        if (room[backY][backX] === 0) q.push([backX, backY, direction]);
      }
    }
  }

  return moves; 
};

console.log(getRobotMoves(input));
