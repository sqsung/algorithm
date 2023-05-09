/* For VSC Test 
const N = '7';
const networks = ['1 2', '2 3', '1 5', '5 2', '5 6', '4 7'];
*/

const [N, _, ...networks] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const graph = Array.from({ length: +N + 1 }).map(() => []);
const checked = Array.from({ length: +N + 1 }).fill(false);
const infected = [];

networks.forEach(network => {
  const [start, end] = network.split(' ');

  graph[start].push(+end);
  graph[end].push(+start);
});

const dfsSearchForInfection = comp => {
  if (checked[comp]) return;

  if (comp !== 1) infected.push(comp);
  checked[comp] = true;

  graph[comp].forEach(computer => dfsSearchForInfection(computer));
};

dfsSearchForInfection(1);

console.log(infected.length);
