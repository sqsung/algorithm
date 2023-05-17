// let input = ['9', '5 12 7 10 9 1 2 3 11', '13'];
let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let nums = input[1].split(' ').map(val => +val).sort((a, b) => a - b);
let goal = Number(input[2]);
let count = 0;
let start = 0;
let end = Number(input[0]) - 1;

while (start !== end) {
    if (nums[start] + nums[end] === goal) {
        count++;
        start++;
    } else if (nums[start] + nums[end] > goal) {
        end--;
    } else {
        start++;
    }
}

console.log(count);