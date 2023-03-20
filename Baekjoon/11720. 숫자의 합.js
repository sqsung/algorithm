const [, number] = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let answer = 0;

[...number].forEach(num => (answer += +num));

console.log(answer);
