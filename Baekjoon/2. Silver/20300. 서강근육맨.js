// const N = '5';
// const input = '1 2 3 4 5';

// const N = '10';
// const input = '7 8 1 2 5 7 10 12 9 2';

const [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const machines = +N;
const losses = input
  .split(' ')
  .map(val => BigInt(val))
  .sort((a, b) => (a < b ? -1 : 1));

const getLeastLoss = () => {
  let answer = machines % 2 === 0 ? 0 : losses.pop();
  let head = 0;
  let tail = losses.length - 1;

  while (head < tail) {
    if (losses[head] + losses[tail] > answer) answer = losses[head] + losses[tail];

    head += 1;
    tail -= 1;
  }

  return answer.toString();
};

console.log(getLeastLoss());
