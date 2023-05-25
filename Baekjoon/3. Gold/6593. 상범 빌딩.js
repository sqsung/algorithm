// prettier-ignore
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(row => row.trim());

const testCases = (() => {
  const testCases = [];

  while (input.length) {
    // prettier-ignore
    const [Z, Y, X] = input.shift().split(' ').map(val => +val);
    const building = [];
    let splitCount = 0;
    let start = { x: null, y: null, z: null };

    while (splitCount !== Z && input.length) {
      if (input[0].length === 0) {
        splitCount += 1;
        if (splitCount !== Z) building.push([]);

        input.shift();

        continue;
      }

      if (!building.length) building.push([]);

      const row = [...input.shift()];

      if (row.includes('S')) start = { x: row.indexOf('S'), y: building[splitCount].length, z: splitCount };
      building.at(-1).push(row);
    }

    if (Z === 0 || Y === 0 || X === 0) input.shift();
    testCases.push({ building, start, X, Y, Z });
  }

  return testCases;
})();

const dirs = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, -1],
  [0, 0, 1],
];

testCases.forEach(tc => {
  // prettier-ignore
  const { building, start: { x, y, z }, X, Y, Z } = tc;
  const checked = Array.from({ length: Z }).map(() =>
    Array.from({ length: Y }).map(() => Array.from({ length: X }, () => false))
  );

  if (!building.length) return;

  const queue = [[x, y, z, 0]];

  while (queue.length) {
    const [x, y, z, time] = queue.shift();

    if (building[z][y][x] === 'E') {
      console.log(`Escaped in ${time} minute(s).`);

      return;
    }

    dirs.forEach(dir => {
      const xPos = x + dir[0];
      const yPos = y + dir[1];
      const zPos = z + dir[2];

      if (xPos < 0 || yPos < 0 || zPos < 0 || xPos >= X || yPos >= Y || zPos >= Z) return;

      if (checked[zPos][yPos][xPos] || building[zPos][yPos][xPos] === '#') return;

      checked[zPos][yPos][xPos] = true;
      queue.push([xPos, yPos, zPos, time + 1]);
    });
  }

  console.log('Trapped!');
});
