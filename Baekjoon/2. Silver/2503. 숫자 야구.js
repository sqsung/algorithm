// const input = ['4', '123 1 1', '356 1 0', '327 2 0', '489 0 1'];

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = +input.shift();
const calls = input.map(row => row.split(' '));

const testViability = stringNum => {
  let count = 0;

  for (let i = 0; i < N; i++) {
    let strike = 0;
    let ball = 0;

    for (let j = 0; j < 3; j++) {
      const jOfCalledNum = calls[i][0][j];
      const jOfParamNum = stringNum[j];

      if (jOfCalledNum === jOfParamNum) {
        strike += 1; // Case 1: Strike
      } else if (stringNum.includes(jOfCalledNum)) {
        ball += 1; // Case 2: Ball
      }
    }

    if (strike !== +calls[i][1] || ball !== +calls[i][2]) break;
    count += 1;
  }

  return count === N ? 1 : 0;
};

const testViableNumbers = () => {
  let answer = 0;

  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      if (i === j) continue;

      for (let k = 1; k < 10; k++) {
        if (k === i || k === j) continue;

        const viableNumber = `${i}${j}${k}`;
        answer += testViability(viableNumber);
      }
    }
  }

  return answer;
};

console.log(testViableNumbers());
