/**
 *
 * @param {string} dirs
 * @returns number of unique steps taken when following dirs
 */

const solution = dirs => {
  const directions = [...dirs];
  const movements = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0] };
  const visited = [];
  let current = [0, 0];
  let uniqueMoves = 0;

  directions.forEach(dir => {
    const move = movements[dir];

    if (Math.abs(current[0] + move[0]) > 5 || Math.abs(current[1] + move[1]) > 5) return;

    const start = current;
    const end = [current[0] + move[0], current[1] + move[1]];
    current = end;

    const path = [start.join(''), end.join('')];
    const pathValidity1 = visited.filter(passed => passed[0] === path[0] && passed[1] === path[1]).length;
    const pathValidity2 = visited.filter(passed => passed[1] === path[0] && passed[0] === path[1]).length;

    if (pathValidity1 || pathValidity2) return;

    visited.push(path);
    uniqueMoves++;
  });

  return uniqueMoves;
};

/* Test Cases
// console.log(solution('ULURRDLLU'));
// console.log(solution('LULLLLLLU'));
// console.log(solution('UUUUUU'));
*/
