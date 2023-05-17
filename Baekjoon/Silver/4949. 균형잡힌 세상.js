const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();

const getBalanceTestResults = phrases => {
  const targets = '()[]';
  const opens = '([';

  const answers = phrases.map(phrase => {
    const stack = [];

    for (const character of phrase) {
      if (!targets.includes(character)) continue;

      if (opens.includes(character)) {
        stack.push(character);
      } else if (character === ']') {
        if (!stack.length || stack.at(-1) !== '[') return 'no';

        stack.pop();
      } else if (character === ')') {
        if (!stack.length || stack.at(-1) !== '(') return 'no';

        stack.pop();
      }
    }

    return stack.length !== 0 ? 'no' : 'yes';
  });

  return answers.join('\n');
};

console.log(getBalanceTestResults(input));
