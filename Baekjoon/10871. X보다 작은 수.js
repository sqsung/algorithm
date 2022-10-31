let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let numbers = input[0].split(' ').map(x => Number(x));
let array = input[1].split(' ').map(x => Number(x));

let answer = [];

for(let i = 0; i <= numbers[0]; i++) {
    array[i] < numbers[1] ? answer.push(array[i]) : answer;    
}

console.log(answer.join(' '));