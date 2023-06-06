// const info = '3 5';
// const input = ['1 2 3 4 5', '5 4 3 2 1', '1 2 3 2 1'];

const [info, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [M, C] = info.split(' ').map(val => +val);
const preferences = input.map(row => row.split(' ').map(val => +val));

const solution = () => {
  let max = -Infinity;

  for (let i = 0; i < C - 2; i++) {
    for (let j = i + 1; j < C - 1; j++) {
      for (let k = j + 1; k < C; k++) {
        let total = 0;

        for (let m = 0; m < M; m++) {
          total += Math.max(preferences[m][i], preferences[m][j], preferences[m][k]);
        }

        if (total >= max) max = total;
      }
    }
  }

  return max;
};

console.log(solution());
