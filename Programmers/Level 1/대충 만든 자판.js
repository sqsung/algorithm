/**
 * @param {array} keymap
 * @param {array} targets
 * @returns array of no. of pushes it takes to get to each correponding target
 */

const solution = (keymap, targets) => {
  const uniqueTargets = [...new Set(targets.join(''))];
  const minTargetIdx = {};

  uniqueTargets.forEach(target => {
    const perLetter = [];

    keymap.forEach(map => {
      if (map.includes(target)) perLetter.push(map.indexOf(target) + 1);
    });

    minTargetIdx[target] = Math.min(...perLetter) === Infinity ? 'X' : Math.min(...perLetter);
  });

  console.log(minTargetIdx);

  return targets.map(target => {
    const perTarget = [];

    [...target].forEach(letter => perTarget.push(minTargetIdx[letter]));
    return perTarget.includes('X') ? -1 : perTarget.reduce((acc, cur) => acc + cur);
  });
};

/* Test Cases
console.log(solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']));
console.log(solution(['ABACD', 'BCEFD'], ['ABCD', 'AABR']));
console.log(solution(['AGZ', 'BSSS'], ['ASA', 'BGZ']));
*/
