// const info = '5 3';
// const input = ['1 2', '3 4', '1 3'];

const [info, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [iceCreamCount, mismatchCount] = info.split(' ').map(val => +val);

const solution = () => {
  let combinations = 0;

  const mismatches = Array.from({ length: iceCreamCount + 1 }).map(_ =>
    Array.from({ length: iceCreamCount + 1 }, () => false)
  );

  for (let i = 0; i < mismatchCount; i++) {
    const [a, b] = input
      .shift()
      .split(' ')
      .map(val => +val);

    mismatches[a][b] = true;
    mismatches[b][a] = true;
  }

  for (let i = 1; i <= iceCreamCount; i++) {
    for (let j = i + 1; j <= iceCreamCount; j++) {
      if (mismatches[i][j]) continue;

      for (let k = j + 1; k <= iceCreamCount; k++) {
        if (mismatches[j][k] || mismatches[i][k]) continue;

        combinations += 1;
      }
    }
  }

  return combinations;
};

console.log(solution());
