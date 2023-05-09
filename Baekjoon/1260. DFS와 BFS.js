// TC 1:
// const info = '4 5 1';
// const edges = ['1 2', '1 3', '1 4', '2 4', '3 4'];

// TC2:
// const info = '5 5 3';
// const edges = ['5 4', '5 2', '1 2', '3 4', '3 1'];

const [info, ...edges] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, _, start] = info.split(' ');

const graph = Array.from({ length: +N + 1 }).map(() => []);
const visited = Array.from({ length: +N + 1 }).fill(false);

const dfsResults = [];
const bfsResults = [];

edges.forEach(edge => {
  const [from, to] = edge.split(' ');

  graph[from].push(+to);
  graph[to].push(+from);
});

console.log(graph);

graph.forEach(c => c.sort((a, b) => a - b));

const dfs = node => {
  if (visited[node]) return;

  dfsResults.push(node);
  visited[node] = true;

  graph[node].forEach(connected => {
    dfs(connected);
  });
};

const bfs = node => {
  const toVisit = [node];
  let vertex;

  while (toVisit.length) {
    vertex = toVisit.shift();

    if (visited[vertex]) continue;

    visited[vertex] = true;

    bfsResults.push(vertex);

    graph[vertex].forEach(v => {
      if (!visited[v]) toVisit.push(v);
    });
  }
};

dfs(+start);
visited.fill(false);
bfs(+start);

console.log(dfsResults.join(' '));
console.log(bfsResults.join(' '));
