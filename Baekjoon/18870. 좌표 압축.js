// let coordinates = '2 4 -10 4 -9';
let [N, coordinates] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let C = coordinates.split(' ');
let set = [...new Set(C.map(v => +v).sort((a, b) => a - b))];
let obj = {};
let res = '';

for (let i = 0; i < set.length; i++) { 
    obj[set[i]] = i;
}

for (let i = 0; i < C.length; i++) {
    if (i === 0) res += obj[C[i]];
    else {
        res += ' ';
        res += obj[C[i]];
    }
}

console.log(res);