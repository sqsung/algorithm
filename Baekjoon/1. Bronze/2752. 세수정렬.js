const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number).sort((a, b) => a - b);

console.log(...input);