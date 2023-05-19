let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((el) => Number(el));


// let input = [5,5,4,3,2,1]; //for local test

input = input.slice(1, input.length).sort((a,b) => a - b);
for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
}



