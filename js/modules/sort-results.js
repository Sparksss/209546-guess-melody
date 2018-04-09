const sortGameResults = (statistics, {points, notes, time} = {}) => {
  if (!points || !notes || !time) {
    return -1;
  }
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

  return {
    playerPosition,
    quantytiPoints
  };
};

const renderStringResult = (results) => {
  if (Object.keys(results).length === 0) {
    return -1;
  }
  const {playerPosition, quantytiPoints} = results;
  return `Вы заняли ${playerPosition} место из ${quantytiPoints} игроков. Это лучше, чем у ${playerPosition / quantytiPoints * 10}% игроков`;
};

export {sortGameResults, renderStringResult};
