let fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let len = inputs.shift();
// let inputs = ['but', 'i', 'wont', 'hesitate', 'no', 'more', 'no', 'more', 'it', 'cannot', 'wait', 'im', 'yours']
inputs = [...new Set(inputs)];
inputs.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length)
console.log(inputs.join('\n'));
