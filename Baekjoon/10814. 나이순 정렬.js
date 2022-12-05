let fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let len = inputs.shift();

inputs.sort((a, b) => a.split(' ')[0] - b.split(' ')[0]);
console.log(inputs.join('\n'));