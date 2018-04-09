const sortGameResults = (statistics, {points}) => {
  if (!points) {
    return -1;
  }
  let n = 0;
  const quantytiPoints = statistics.length;
  let playerPosition = 0;
  statistics.push(points);
  statistics.sort((prev, next) => {
    return prev > next;
  });

  for (let i = 0; i < quantytiPoints; i++) {
    if (statistics[i] === points) {
      playerPosition = i;
    }
  }

  n = playerPosition / quantytiPoints * 10;
  return `Вы заняли ${playerPosition} место из ${quantytiPoints} игроков. Это лучше, чем у ${n}% игроков`;
};

export default sortGameResults;
