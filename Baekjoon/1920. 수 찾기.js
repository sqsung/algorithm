// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const input = ['5', '4 1 5 2 3', '5', '1 3 7 9 5'];
const [N, A, M, B] = input.map(line => line.split(' '));
const set = new Set(A); 
const result = B.map(val => set.has(val) ? 1 : 0);
console.log(result.join('\n'));
