const input = ['4', '2 3 1', '5 2 4 1'];

// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = +input[0];
const distances = input[1].split(' ').map(val => BigInt(val));
const prices = input[2].split(' ').map(val => BigInt(val));

const solution = () => {
  let cheapestPrice = prices[0];
  let totalCost = 0n;

  for (let i = 0; i < distances.length; i++) {
    totalCost += cheapestPrice * distances[i];

    if (cheapestPrice > prices[i + 1]) cheapestPrice = prices[i + 1];
  }

  return String(totalCost);
};

console.log(solution());
