// const [A, B] = [2, 162];

const [A, B] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(val => +val);

const solution = (A, B) => {
  const queue = [[A, 1]];

  while (queue.length) {
    const [current, count] = queue.shift();

    if (current === B) return count;

    const oneAdded = current * 10 + 1;
    const multiplied = current * 2;

    if (oneAdded <= B) queue.push([oneAdded, count + 1]);
    if (multiplied <= B) queue.push([multiplied, count + 1]);
  }

  return -1;
};

console.log(solution(A, B));
