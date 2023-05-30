const info = '5 8';
const input = ['TATGATAC', 'TAAGCTAC', 'AAAGATCC', 'TGAGATAC', 'TAAGATGT'];

// const [info, ...input] = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [N, DNA_LENGTH] = info.split(' ').map(val => +val);

const getDNA = () => {
  const answer = [];
  let distance = 0;

  for (let i = 0; i < DNA_LENGTH; i++) {
    const counts = { A: 0, C: 0, G: 0, T: 0 };
    let max = null;

    for (let j = 0; j < N; j++) {
      counts[input[j][i]] += 1;

      if (max === input[j][i]) continue;

      if (!max || counts[max] < counts[input[j][i]] || (counts[max] === counts[input[j][i]] && input[j][i] < max)) {
        max = input[j][i];
      }
    }

    answer.push(max);
    distance += N - counts[max];
  }

  return answer.join('') + '\n' + distance;
};

console.log(getDNA());
