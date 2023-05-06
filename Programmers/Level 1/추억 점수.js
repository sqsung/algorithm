const solution = (name, yearning, photo) => {
  const pointsByPerson = {};

  name.forEach((name, idx) => (pointsByPerson[name] = yearning[idx]));

  return photo.map(batch => batch.reduce((acc, cur) => acc + (pointsByPerson[cur] ? pointsByPerson[cur] : 0), 0));
};
