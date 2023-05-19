// const info = '32 6';
// const input = '27 16 30 11 6 23';

const [info, input] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [len, targetCount] = info.split(' ').map(val => +val);
const targets = input.split(' ').map(val => +val);

const deque = [];

for (let i = 1; i <= len; i++) deque.push(i);

const getCount = () => {
  let count = 0;

  for (let i = 0; i < targetCount; i++) {
    const target = targets[i];

    if (deque[0] === target) {
      deque.shift();

      continue;
    }

    if (deque.indexOf(target) > deque.length / 2) {
      while (deque[0] !== target) {
        deque.unshift(deque.pop());

        count += 1;
      }

      deque.shift();
    } else {
      while (deque[0] !== target) {
        deque.push(deque.shift());

        count += 1;
      }

      deque.shift();
    }
  }

  return count;
};

console.log(getCount());
