// VSC TC:
// const subin = 5;
// const sister = 17;

// prettier-ignore
const [subin, sister] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(val => +val);
const visited = Array.from({ length: 100100 }, () => false);

const bfsMoveSubin = N => {
  const queue = [[N, 0]];
  visited[N] = true;

  while (queue.length) {
    const [subinCurrent, time] = queue.shift();

    if (subinCurrent === sister) return time;

    [subinCurrent - 1, subinCurrent + 1, subinCurrent * 2].forEach(possibility => {
      if (!visited[possibility] && possibility >= 0 && possibility <= 100000) {
        visited[possibility] = true;

        queue.push([possibility, time + 1]);
      }
    });
  }
};

console.log(bfsMoveSubin(subin));
