// const input = ['7', '3 10', '5 20', '1 10', '1 20', '2 15', '4 40', '2 200']; // -> 45
// const input = ['10', '1 1', '1 2', '1 3', '1 4', '1 5', '1 6', '1 7', '1 8', '1 9', '1 10']; // -> 55
// const input = ['10', '5 10', '5 9', '5 8', '5 7', '5 6', '5 10', '5 9', '5 8', '5 7', '5 6']; // -> 20
// const input = ['10', '5 50', '4 40', '3 30', '2 20', '1 10', '1 10', '2 20', '3 30', '4 40', '5 50']; // -> 90

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input.shift();
const payChart = input.map(info => info.split(' ').map(val => +val));

const getMaxPay = () => {
  let max = -Infinity;

  const dfs = (idx, total) => {
    max = Math.max(max, total);

    for (let i = idx; i < N; i++) {
      const [time, pay] = payChart[i];
      const nextWorkDay = i + time;

      dfs(nextWorkDay, nextWorkDay > N ? total : total + pay);
    }

    return max;
  };

  return dfs(0, 0);
};

console.log(getMaxPay());
