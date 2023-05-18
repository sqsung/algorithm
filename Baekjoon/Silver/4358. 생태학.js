const trees = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(
  (() => {
    const TOTAL = trees.length;
    const counts = {};

    let answer = '';

    trees.forEach(tree => {
      counts[tree] ? (counts[tree] += 1) : (counts[tree] = 1);
    });

    const keys = Object.keys(counts);
    const percentageObjs = [];

    keys.forEach(key => {
      percentageObjs.push({ name: key, percentage: ((counts[key] / TOTAL) * 100).toFixed(4) });
    });

    percentageObjs.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;

      return 0;
    });

    percentageObjs.forEach(({ name, percentage }) => {
      answer += `${name} ${percentage}` + '\n';
    });

    return answer.trim();
  })()
);
