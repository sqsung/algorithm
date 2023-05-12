// VSC TC:
// const N = 3;
// const input = ['3', '1 0', '5', '4 2', '1 2 3 4', '6 0', '1 1 9 1 1 1'];

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const _ = +input.shift();

const print = (target, q) => {
  const printerQueue = q.map((paper, idx) => ({ value: paper, target: idx === target ? true : false }));

  let highestPriority = Math.max(...printerQueue.map(({ value }) => value));
  let printCount = 0;

  while (printerQueue.length) {
    if (printerQueue[0].value === highestPriority) {
      if (printerQueue[0].target) return (printCount += 1);

      printerQueue.shift();
      printCount += 1;
      highestPriority = Math.max(...printerQueue.map(({ value }) => value));
    } else {
      printerQueue.push(printerQueue.shift());
    }
  }
};

for (let i = 0; i < input.length; i += 2) {
  const [, target] = input[i].split(' ').map(num => +num);
  const q = input[i + 1].split(' ').map(num => +num);

  console.log(print(target, q));
}
