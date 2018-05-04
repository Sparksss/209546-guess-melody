const CORRECT_POSITION_IN_ARRAY = 1;
const sortGameResults = (statistics, {points, notes, time} = {}) => {
  const quantityPoints = statistics.length;
  if (!points || !notes || !time) {
    return -1;
  }
  let playerPosition = 0;
  statistics.push({answers: points});
  statistics.sort((prev, next) => {
    return prev.answers > next.answers;
  });

  for (let i = 0; i < quantityPoints; i++) {
    if (statistics[i].answers === points) {
      playerPosition = i;
      break;
    }
  }

  const stat = {
    playerPosition,
    quantityPoints,
  };

  return stat;
};

const renderStringResult = (results) => {
  if (Object.keys(results).length === 0) {
    return -1;
  }
  const {playerPosition, quantityPoints} = results;
  let message = `Вы заняли ${playerPosition + CORRECT_POSITION_IN_ARRAY} место из ${quantityPoints} игроков. Это лучше, чем у ${(quantityPoints - playerPosition) * 10}% игроков`;
  return message;
};

export {sortGameResults, renderStringResult};
