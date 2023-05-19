let inputs = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(i => parseInt(i));

let arr;
for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
        if (inputs.reduce((sum, item) => sum + item, 0) === inputs[i] + inputs[j] + 100) {
            arr = inputs.filter(item => item !== inputs[i] && item !== inputs[j]);
            break;
        }
    }
    if (!!arr) break;
}

arr.sort((a, b) => a - b);

for(let i=0; i<7; i++) {
    console.log(arr[i]);
}