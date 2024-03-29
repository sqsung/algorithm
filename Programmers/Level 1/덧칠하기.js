const solution = (_, roller, sections) => {
  let startingSpot = sections[0];

  const painted = sections.map((unpainted, idx) => {
    if (idx === 0) return 'O';

    if (unpainted <= startingSpot + roller - 1) return 'X';

    startingSpot = unpainted;
    return 'O';
  });

  return painted.filter(res => res !== 'X').length;
};
