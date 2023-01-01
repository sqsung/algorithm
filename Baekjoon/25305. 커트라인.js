// let input = ['5 2', '100 76 85 93 98'];
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let [N, cutline] = input[0].split(' ');
let scores = input[1].split(' ').map(val => +val).sort((a, b) => b - a);
console.log(scores[cutline - 1]);

