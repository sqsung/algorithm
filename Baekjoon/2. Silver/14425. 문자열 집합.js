const [info, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(
  (() => {
    const [S, _] = info.split(' ').map(val => +val);
    const sample = {};

    let included = 0;

    input.splice(0, S).forEach(word => {
      sample[word] = 'placeholder';
    });

    input.forEach(word => {
      if (sample[word]) included += 1;
    });

    return included;
  })()
);
