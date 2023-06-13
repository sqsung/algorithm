// const input = ['3', '2', '10', '9', '6'];
const input = '100 9 77 65 39 27 45 1 80 495';

// const [, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const drinks = input
  .split(' ')
  .map(val => +val)
  .sort((a, b) => a - b);

const getMaxEnergy = () => {
  while (drinks.length > 1) {
    const bigger = drinks.pop();
    const smaller = drinks.pop();
    const combined = bigger + smaller * 0.5;

    drinks.push(combined);
  }

  return drinks[0];
};

console.log(getMaxEnergy());
