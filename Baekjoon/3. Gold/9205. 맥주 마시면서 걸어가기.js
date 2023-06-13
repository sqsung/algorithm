class Queue {
  constructor(initValue) {
    this.q = initValue ? [initValue] : [];
    this.head = 0;
    this.tail = initValue ? 1 : 0;
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

  hasCoordinates(x, y) {
    for (let i = 0; i < this.q.length; i++) {
      if (this.q[i].includes(x) && this.q[i].includes(y)) return false;
    }

    return false;
  }
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const testCases = (() => {
  const tcs = [];
  let head = -1;
  let N = input.shift();

  while (N--) {
    const stores = [];
    let storeCount = +input[++head];
    const home = input[++head].split(' ').map(val => +val);

    while (storeCount--) {
      stores.push(input[++head].split(' ').map(val => +val));
    }

    const fetival = input[++head].split(' ').map(val => +val);

    tcs.push({ home, storeCount, stores, fetival });
  }

  return tcs;
})();

const isWithinThousand = (x1, y1, x2, y2) => {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2) <= 1000 ? true : false;
};

const isHappy = tc => {
  const { home, storeCount, stores, fetival } = tc;

  const [festivalX, festivalY] = fetival;
  const [homeX, homeY] = home;
  const queue = new Queue(home);
  const visited = Array.from({ length: storeCount }, () => false);

  while (!queue.isEmpty()) {
    const [x, y] = queue.shift();

    if (isWithinThousand(x, y, festivalX, festivalY)) {
      return 'happy';
    }

    stores.forEach((store, idx) => {
      const [storeX, storeY] = store;

      if (
        visited[idx] ||
        (storeX === x && storeY === y) ||
        (storeX === homeX && storeY === homeY) ||
        !isWithinThousand(x, y, storeX, storeY)
      )
        return;

      queue.push(store);
      visited[idx] = true;
    });
  }

  return 'sad';
};

testCases.forEach(tc => console.log(isHappy(tc)));
