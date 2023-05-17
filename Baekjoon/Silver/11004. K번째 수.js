// let input = ['5 2', '4 1 2 3 5']
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let [N, K] = input[0].split(' ');
let nums = input[1].split(' ').map(val => +val).sort((a, b) => a - b);
nums.unshift('X');

console.log(nums[Number(K)]);