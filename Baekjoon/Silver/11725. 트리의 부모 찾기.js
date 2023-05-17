// VSC TC 1;
// const N = '7';
// const edges = ['1 6', '6 3', '3 5', '4 1', '2 4', '4 7'];

// VSC TC 2:
// const N = '12';
// const edges = ['1 2', '1 3', '2 4', '3 5', '3 6', '4 7', '4 8', '5 9', '5 10', '6 11', '6 12'];

const [N, ...edges] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const graph = Array.from({ length: +N + 1 }).map(() => []);
const checked = Array.from({ length: +N + 1 }).fill(false);
const parentNodes = Array.from({ length: +N + 1 }).fill(null);

edges.forEach(edge => {
  const [start, end] = edge.split(' ');

  graph[start].push(+end);
  graph[end].push(+start);
});

const dfsSearchForParent = vertex => {
  if (checked[vertex]) return;

  checked[vertex] = true;

  graph[vertex].forEach(child => {
    if (!checked[child]) parentNodes[child] = vertex;

    dfsSearchForParent(child);
  });
};

dfsSearchForParent(1);

let answer = '';

for (let i = 2; i < parentNodes.length; i++) answer += parentNodes[i] + '\n';

console.log(answer);
