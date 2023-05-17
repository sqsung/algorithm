let [a,b,c,d,e] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(val => +val);
let arr = [a, b, c, d, e];
arr.sort((a, b) => a - b);
console.log((a + b + c + d + e) / 5);
console.log(arr[2]);