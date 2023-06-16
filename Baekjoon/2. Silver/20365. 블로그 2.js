// const input = ['8', 'BBRBRBBR'];

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const getMinStroke = tc => {
  const [N, strokes] = [+tc[0], tc[1]];
  const first = strokes[0];
  let count = 1;

  for (let i = 1; i < N; i++) {
    if (strokes[i] !== first && strokes[i] !== strokes[i - 1]) count += 1;
  }

  return count;
};

console.log(getMinStroke(input));
