/**
 *
 * @param {array} wallpaper
 * @returns {array} four numbers representing the start/end drag points
 */

const solution = wallpaper => {
  const start = { x: null, y: null };
  const end = { x: null, y: null };
  const startSharpIdx = [];
  const endSharpIdx = [];

  wallpaper.forEach((row, idx) => {
    if (row.includes('#')) {
      if (start.x === null) start.x = wallpaper.indexOf(row);
      end.x = idx + 1;

      startSharpIdx.push(row.indexOf('#'));
      endSharpIdx.push(row.lastIndexOf('#'));
    }
  });

  start.y = Math.min(...startSharpIdx);
  end.y = Math.max(...endSharpIdx) + 1;

  return [...Object.values(start), ...Object.values(end)];
};

// Test Cases
// console.log(solution(['.#...', '..#..', '...#.']));
// console.log(solution(['..........', '.....#....', '......##..', '...##.....', '....#.....']));
// console.log(solution(['.##...##.', '#..#.#..#', '#...#...#', '.#.....#.', '..#...#..', '...#.#...', '....#....']));
// console.log(solution(['..', '#.']));
// console.log(solution(['#.', '#.']));
// console.log(solution(['..', '##']));
