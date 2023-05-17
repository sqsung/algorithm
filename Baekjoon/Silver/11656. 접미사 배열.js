// let str = 'baekjoon' 
let str = require('fs').readFileSync('dev/stdin').toString().trim();
let arr = [];
let len = str.length; 

for (let i = 0; i < len; i++) {
    let spl = str.split('').splice(i).join('');
    arr.push(spl);
}

arr.sort((a,b) => a.localeCompare(b));
let answer = '';

arr.forEach(val => {
    answer += val;
    answer += '\n';
})

console.log(answer);