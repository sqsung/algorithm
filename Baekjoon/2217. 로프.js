let [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input = input.map(i => +i);
input.sort((a, b) => a-b);
let min = input[0] * n;

for (let i = 1; i < n; i++) {
    weight = input[i]*(n-i);
    if (min < weight) min = weight;
}

console.log(min);