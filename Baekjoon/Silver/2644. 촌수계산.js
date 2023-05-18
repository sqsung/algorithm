// const N = '9';
// const targets = '7 3';
// const M = '7';
// const relationships = ['1 2', '1 3', '2 7', '2 8', '2 9', '4 5', '4 6'];

const [N, targets, , ...relationships] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [p1, p2] = targets.split(' ').map(val => +val);
const graph = Array.from({ length: +N + 1 }).map(() => []);
const checked = Array.from({ length: +N + 1 }).fill(false);

const initialize = () => {
  relationships.forEach(relation => {
    const [parent, child] = relation.split(' ').map(val => +val);

    graph[parent].push(child);
    graph[child].push(parent);
  });
};

console.log(
  (() => {
    let steps = 0;

    initialize();

    const areRelated = (p1, p2, count) => {
      if (checked[p1]) return;

      checked[p1] = true;
      count += 1;

      if (graph[p1].includes(p2)) {
        steps = count;
        return;
      }

      graph[p1].forEach(fam => {
        if (checked[fam]) return;

        areRelated(fam, p2, count);
      });
    };

    areRelated(p1, p2, 0);

    return steps === 0 ? -1 : steps;
  })()
);
