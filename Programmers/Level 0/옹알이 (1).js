function solution(babbling) {
  let count = 0;
  const obj = { aya: 1, ye: 2, woo: 3, ma: 4 };

  for (let i = 0; i < babbling.length; i++) {
    let temp = babbling[i]
      .replaceAll('aya', obj['aya'])
      .replaceAll('ye', obj['ye'])
      .replaceAll('woo', obj['woo'])
      .replaceAll('ma', obj['ma']);

    if (!isNaN(Number(temp))) count++;
  }
  return count;
}

console.log(solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa']));
