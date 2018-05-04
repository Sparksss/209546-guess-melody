const CORRECT_POSITION_IN_ARRAY = 1;
const sortGameResults = (statistics, {points, notes, time} = {}) => {
  const quantityPoints = statistics.length;
  if (!points || !notes || !time) {
    return -1;
  }
  statistics.push({answers: points});
  statistics.sort((prev, next) => {
    return prev.answers > next.answers;
  });

  const playerPosition = statistics.findIndex((elem) => elem.answers === points);

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
  return `Вы заняли ${playerPosition + CORRECT_POSITION_IN_ARRAY} место из ${quantityPoints} игроков. Это лучше, чем у ${(quantityPoints - playerPosition) * 10}% игроков`;
};

export {sortGameResults, renderStringResult};
