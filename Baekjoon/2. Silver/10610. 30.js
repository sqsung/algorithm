// let str = '102';
let str = require('fs').readFileSync('dev/stdin').toString().trim();
let sum = 0;
let arr = [];

if (!str.split('').includes('0')) console.log('-1');
else {
    str.split('').forEach(val => {
        sum += Number(val);
        arr.push(Number(val));
    })
    
    if (sum % 3 !== 0) console.log('-1');
    else console.log(arr.sort((a, b) => b - a).join(''));
}