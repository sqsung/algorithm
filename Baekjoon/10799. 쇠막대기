// VSC TC:
// const input = '()(((()())(())()))(())';
// const input = '(((()(()()))(())()))(()())';

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const getMetalBarPieces = parens => {
  let stack = [];
  let pieces = 0;

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(' && parens[i + 1] === ')') {
      pieces += stack.length;
      i += 1;
    } else if (parens[i] === '(') {
      stack.push(parens[i]);
    } else {
      stack.pop();
      pieces += 1;
    }
  }

  return pieces;
};

console.log(getMetalBarPieces(input));
