const solution = (players, callings) => {
  const race = new Map();

  players.forEach((player, idx) => race.set(player, idx));

  callings.forEach(calledPlayer => {
    const currentIdx = race.get(calledPlayer);
    const playerFront = players[currentIdx - 1];

    [players[currentIdx], players[currentIdx - 1]] = [players[currentIdx - 1], players[currentIdx]];

    race.set(calledPlayer, race.get(calledPlayer) - 1);
    race.set(playerFront, race.get(calledPlayer) + 1);
  });

  return players;
};
