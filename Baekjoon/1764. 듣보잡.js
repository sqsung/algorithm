// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = ['3 4', 'ohhenrie', 'charlie', 'baesangwook', 'obama', 'baesangwook', 'ohhenrie', 'clinton'];
let xHeard = Number(input[0].split(' ')[0]);
let xSeen = Number(input[0].split(' ')[1]);
input.shift();
let obj = {};
let res = [];

for(let i = 0; i < xHeard; i++) {
    obj[input[i]] = 'exists';
}

for(let i = xHeard; i < xHeard + xSeen; i++) {
    if(obj[input[i]]) res.push(input[i]);
    else obj[input[i]] = 'exists';
}

res.unshift(res.length);
console.log(res.sort().join('\n'));