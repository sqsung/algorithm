let [lens, A, B] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
// let A = '3 5';
// let B = '2 9';
let numA = A.split(' ').map(v => +v);
let numB = B.split(' ').map(v => +v);
let combined = numA.concat(numB);
console.log(combined.sort((a, b) => a - b).join(' '));