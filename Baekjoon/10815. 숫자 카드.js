// let input = ['5', '6 3 2 10 -10', '8', '10 9 -5 2 3 4 5 -10']
let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let comparedTo = new Set(input[1].split(' '));
let deck = input[3].split(' ');
let answer = [];

for (let card of deck) {
    comparedTo.has(card)
        ? answer.push(1)
        : answer.push(0)
}

console.log(answer.join(' '));