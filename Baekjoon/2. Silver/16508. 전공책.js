// const input = ['ANT', '4', '35000 COMPUTERARCHITECTURE', '47000 ALGORITHM', '43000 NETWORK', '40000 OPERATINGSYSTEM']; // -> 40000
// const input = ['O', '3', '10000 ZO', '400 OP', '300 KO']; // -> 300
// const input = ['ALMIGHTY', '4', '35000 COMPUTERARCHITECTURE', '47000 ALGORITHM', '43000 NETWORK', '40000 OPERATINGSYSTEM']; // -> 87000
// const input = ['BAKEJOON', '3', '25000 JAVA', '10000 OOP', '30000 BINARYCHECK']; // -> 65000
// const input = ['JAVA', '2', '30000 CPLUSPLUS', '25000 PYTHON']; // -> -1

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const getMinPrice = input => {
  const goal = input.shift().trim();
  const N = +input.shift();
  const books = [];

  let answer = Infinity;

  input.forEach(book => {
    const [price, name] = book.split(' ');

    books.push([+price, name.trim()]);
  });

  const dfs = (total, goal, start) => {
    if (goal.length === 0) {
      answer = Math.min(answer, total);
      return;
    }

    for (let i = start; i < N; i++) {
      let newGoal = [...goal];
      const [price, title] = books[i];

      for (const ch of title) {
        const index = newGoal.indexOf(ch);

        if (index !== -1) {
          newGoal.splice(index, 1).join('');
        }
      }

      dfs(total + price, newGoal, i + 1);
    }
  };

  dfs(0, [...goal], 0);

  return answer === Infinity ? -1 : answer;
};

console.log(getMinPrice(input));
