// let line = [1, 2, 3, 3, 4]; //for local
let fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let line = inputs[1].split(' ').map(el => Number(el)).sort((a, b) => a - b);
let x = 0;
let count = 0;

for (let i = 0; i < line.length; i++) {
    x += line[i];
    count += x;
}

console.log(count);