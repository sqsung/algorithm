let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let input_count = Number(input[0]);

for (let i = 1; i <= input_count; i++) {
  let testcase = input[i];
  let stack = [];
  let result = "YES";

  for (let j = 0; j < testcase.length; j++) {
    if (testcase[j] === '(') {
      stack.push(1);
    } else {
      if (!stack.pop()) {
        result = 'NO';
        break;
      } 
    }
  }

  if (stack.length !== 0) {
    result = 'NO';
  }

  console.log(result);
}