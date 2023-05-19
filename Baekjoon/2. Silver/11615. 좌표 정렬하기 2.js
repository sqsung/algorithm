const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
input.shift();

let coordinate = input.filter((v, i) => i >= 0).map((v) => v.split(' '));
let answer = '';

coordinate.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
})
  .forEach(arr => {
    answer += `${arr[0]} ${arr[1]}\n`
  });

console.log(answer);