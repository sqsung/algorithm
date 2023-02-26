/**
 *
 * @param {string} dirs
 * @returns number of unique steps taken when following dirs
 */

const solution = dirs => {
  const _dirs = [...dirs];
  const moves = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0] };

  let visited = [];
  let current = [0, 0];
  let uniqueMoves = 0;

  _dirs.forEach(dir => {
    if (Math.abs(current[0] + moves[dir][0]) > 5 || Math.abs(current[1] + moves[dir][1]) > 5) return;

    const start = current;
    const end = [current[0] + moves[dir][0], current[1] + moves[dir][1]];
    const path = start.join('') + end.join('');
    current = end;

    if (visited.includes(path)) return;

    visited = [...visited, path, end.join('') + start.join('')];
    uniqueMoves++;
  });

  return uniqueMoves;
};

// Test Cases:
// console.log(solution('ULURRDLLU'));
// console.log(solution('LULLLLLLU'));
// console.log(solution('UUUUUUUUUUU'));
