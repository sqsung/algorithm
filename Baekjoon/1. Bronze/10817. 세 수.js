let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map((el) => Number(el));

console.log(input.sort((a,b) => b - a)[1]);



