// TC 1:
// const info = "4 5 1";
// const edges = ["1 2", "1 3", "1 4", "2 4", "3 4"];

// TC2:
// const info = "5 5 3";
// const edges = ["5 4", "5 2", "1 2", "3 4", "3 1"];

const [info, ...edges] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, _, start] = info.split(" ").map(value => +value);
const graph = Array.from({ length: N + 1 }).map(() => []);

edges.forEach(edge => {
  const [node1, node2] = edge.split(" ").map(value => +value);

  graph[node1].push(+node2);
  graph[node2].push(+node1);
});

graph.forEach(edge => edge.sort((a, b) => a - b));

const getDFSresults = node => {
  const visited = Array.from({ length: N + 1 }).map(() => false);
  const results = [];

  const dfs = node => {
    if (visited[node]) return;

    visited[node] = true;
    results.push(node);

    graph[node].forEach(connectedNode => {
      dfs(connectedNode);
    });
  };

  dfs(node);

  return results;
};

const getBFSresults = node => {
  const visited = Array.from({ length: N + 1 }).map(() => false);
  const queue = [node];
  const results = [];

  while (queue.length) {
    const node = queue.shift();

    if (visited[node]) continue;

    visited[node] = true;
    results.push(node);

    graph[node].forEach(connectedNode => queue.push(connectedNode));
  }

  return results;
};

const solution = node => {
  const dfs = getDFSresults(node);
  const bfs = getBFSresults(node);

  return dfs.join(" ") + "\n" + bfs.join(" ");
};

console.log(solution(start));
