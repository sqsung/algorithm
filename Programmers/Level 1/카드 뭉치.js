/**
 *
 * @param {array} cards1
 * @param {array} cards2
 * @param {array} goal
 * @returns string (Y/N) of whether goal can be made with cards1 & cards2
 */

const solution = (cards1, cards2, goal) => {
  const prevIdx = { cards1: -1, cards2: -1 };

  const byWordValidty = goal.map(word => {
    const deck = cards1.includes(word) ? 'cards1' : 'cards2';
    const currentIdx = cards1.includes(word) ? cards1.indexOf(word) : cards2.indexOf(word);
    const validity = prevIdx[deck] + 1 === currentIdx;

    prevIdx[deck]++;
    return validity;
  });

  return byWordValidty.includes(false) ? 'No' : 'Yes';
};

/* Test Cases
console.log(solution(['i', 'drink', 'water'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water']));
console.log(solution(['i', 'water', 'drink'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water']));
*/
