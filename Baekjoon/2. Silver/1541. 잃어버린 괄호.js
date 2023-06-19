const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const getMinResult = equation => {
  const onlyPluses = equation.split('-');

  onlyPluses.forEach((eq, idx) => {
    if (!eq.includes('+')) return;

    const onlyNums = eq.split('+').map(val => +val);
    onlyPluses[idx] = onlyNums.reduce((a, c) => a + c);
  });

  return onlyPluses.reduce((a, c) => a - c);
};

console.log(getMinResult(input));
