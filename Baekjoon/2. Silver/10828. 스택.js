const [N, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const sequence = [];
const answer = [];

for (let i = 0; i < N; i++) {
    if (input[i].split(' ').length > 1) sequence.push(+input[i].split(' ')[1]);
    else if (input[i] === 'top') answer.push(sequence[sequence.length - 1] || -1);
    else if (input[i] === 'size') answer.push(sequence.length);
    else if (input[i] === 'empty') sequence.length === 0 ? answer.push(1) : answer.push(0); 
    else if (input[i] === 'pop') sequence.length === 0 ? answer.push(-1) : answer.push(sequence.pop());
}

console.log(answer.join('\n'));