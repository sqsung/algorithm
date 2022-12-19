// let input = ['5', '6 3 2 10 10 10 -10 -10 7 3', '8', '10 9 -5 2 3 4 5 -10']
let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let comparedTo = input[1].split(' ');
let deck = input[3].split(' ');
let obj = {};
let answer = [];

for (let val of comparedTo) {
    console.log(`val - ${val}`)
    if (!obj[val]) obj[val] = 1;
    else obj[val] += 1;
}

for (let card of deck) {
    obj[card] ? answer.push(obj[card]) : answer.push(0);
}

console.log(answer.join(' '));