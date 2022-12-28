// let arr = '1 4 2 3 1 4 2 3 1 2';
const [len, arr] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const set = [...new Set(arr.split(' ').map(val => +val))];
console.log(set.sort((a, b) => a - b).join(' '));