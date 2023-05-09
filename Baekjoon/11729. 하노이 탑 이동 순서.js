const input = '3';
// const input = require('fs').readFileSync('/dev/stdin').toString();

const N = +input;
const process = [];
let count = 0;

const hanoi = (N, start, remaining, end) => {
  if (!N) return;

  hanoi(N - 1, start, end, remaining);

  process.push(`${start} ${end}`);

  count += 1;

  hanoi(N - 1, remaining, start, end);
};

hanoi(N, 1, 2, 3);

console.log(count);
console.log(process.join('\n'));
