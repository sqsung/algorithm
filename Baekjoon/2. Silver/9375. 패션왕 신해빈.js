const [, ...input] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const tcs = [];

while (input.length) {
  const tc = {};
  let total = +input.shift();

  while (total--) {
    const [, category] = input.shift().split(' ');

    tc[category] = tc[category] ? (tc[category] += 1) : (tc[category] = 1);
  }

  tcs.push(tc);
}

tcs.forEach(tc => {
  const values = Object.values(tc);

  if (values.length === 1) {
    console.log(values[0]);
    return;
  }

  console.log(values.reduce((a, c) => a * (c + 1), 1) - 1);
});
