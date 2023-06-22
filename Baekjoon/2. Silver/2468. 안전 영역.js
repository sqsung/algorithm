// const input = ['5', '6 8 2 6 2', '3 2 3 4 6', '6 7 3 3 2', '7 2 5 3 6', '8 9 5 2 7'];

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const getMaxSafeAreas = input => {
  const N = +input.shift();
  const areas = input.map(row => row.split(' ').map(val => +val));
  const MAX_RAINFALL = Math.max(...areas.flat());
  // prettier-ignore
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const safeAreas = [];

  const checkNearbyAreas = (x, y, rainfall, checked) => {
    dirs.forEach(dir => {
      const [newX, newY] = [x + dir[0], y + dir[1]];

      if (newX >= N || newY >= N || newX < 0 || newY < 0 || checked[newY][newX] || areas[newY][newX] <= rainfall)
        return;

      checked[newY][newX] = true;
      checkNearbyAreas(newX, newY, rainfall, checked);
    });
  };

  const countSafeZonesByRainfall = rainfall => {
    const checked = Array.from({ length: N }).map(() => Array.from({ length: N }, () => false));
    let count = 0;

    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        if (areas[y][x] <= rainfall || checked[y][x]) continue;

        count += 1;
        checkNearbyAreas(x, y, rainfall, checked);
      }
    }

    safeAreas.push(count);
  };

  for (let rainfall = 0; rainfall <= MAX_RAINFALL; rainfall++) {
    countSafeZonesByRainfall(rainfall);
  }

  return Math.max(...safeAreas);
};

console.log(getMaxSafeAreas(input));
