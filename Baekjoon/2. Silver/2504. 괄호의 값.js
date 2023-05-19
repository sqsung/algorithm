// const input = '(()[[]])([])';
// const input2 = '[][]((])';
// const input3 = '(([[)]](';
// const input4 = '(((((';

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const getPoints = parens => {
  const stack = [];

  for (let i = 0; i < parens.length; i++) {
    if ((parens[i] === '(' && parens[i + 1] === ')') || (parens[i] === '[' && parens[i + 1] === ']')) {
      stack.push(parens[i] === '(' ? 2 : 3);
      i += 1;
      continue;
    }

    if (parens[i] === '(' || parens[i] === '[') stack.push(parens[i]);

    if (parens[i] === ']' || parens[i] === ')') {
      const MAGIC_NUMBER = parens[i] === ')' ? 2 : 3;
      let accumulated = 0;

      while (typeof stack.at(-1) === 'number') {
        accumulated += stack.pop();

        if (!stack.length) return 0;
      }

      if ((parens[i] === ')' && stack.at(-1) === '(') || (parens[i] === ']' && stack.at(-1) === '[')) stack.pop();
      else return 0;

      stack.push(accumulated * MAGIC_NUMBER);
    }
  }

  for (let i = 0; i < stack.length; i++) {
    if (typeof stack[i] === 'string') return 0;
  }

  return stack.reduce((cur, acc) => cur + acc);
};

console.log(getPoints(input));
