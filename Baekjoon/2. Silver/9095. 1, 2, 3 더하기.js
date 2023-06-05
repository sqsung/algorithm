// Test Case:
const N = 3;
const tcs = [4, 7, 10];

// const [N, ...tcs] = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n')
//   .map(val => +val);

console.log(
  (() => {
    let answer = '';
    const DP = Array.from({ length: 11 }, () => 0);

    DP[1] = 1;
    DP[2] = 2;
    DP[3] = 4;

    for (let i = 4; i < 11; i++) {
      DP[i] = DP[i - 1] + DP[i - 2] + DP[i - 3];
    }

    for (let i = 0; i < N; i++) {
      answer += DP[tcs[i]] + '\n';
    }

    return answer.trim();
  })()
);
