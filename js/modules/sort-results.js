const sortGameResults = (statistics, {points, notes, time} = {}) => {
  const quantityPoints = statistics.length;
  if (quantityPoints === 0 || !points || !notes || !time) {
    return -1;
  }
  let playerPosition = 0;
  statistics.push(points);
  statistics.sort((prev, next) => {
    return prev > next;
  });

  for (let i = 0; i < quantityPoints; i++) {
    if (statistics[i] === points) {
      playerPosition = i;
    }
  }

  return {
    playerPosition,
    quantityPoints
  };
};

const renderStringResult = (results) => {
  if (Object.keys(results).length === 0) {
    return -1;
  }
  const {playerPosition, quantityPoints} = results;
  return `Вы заняли ${playerPosition} место из ${quantityPoints} игроков. Это лучше, чем у ${playerPosition / quantityPoints * 10}% игроков`;
};

export {sortGameResults, renderStringResult};
