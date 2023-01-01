// let N = 5; 
// let books = ['top', 'top', 'top', 'top', 'kimtop'];
// let books = ['A', 'A', 'B', 'B'];
let [N, ...books] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let occurences = {};
let answer = [];

for (let i = 0; i < N; i++) {
    let x = books[i];
    if (occurences[x]) occurences[x]++;
    else occurences[x] = 1;
}

let max = Math.max(...Object.values(occurences));
for (let titles in occurences) {
    if (occurences[titles] === max) answer.push(titles);
}

console.log(answer.length === 1 ? answer[0] : answer.sort()[0]);