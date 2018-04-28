const TIME_OUT = 0;
const correctPositionInArray = 1;
const sortGameResults = (statistics, {points, notes, time} = {}) => {
  const quantityPoints = statistics.length;
  if (quantityPoints === 0 || !points || !notes || !time) {
    return -1;
  }
  let playerPosition = 0;
  statistics.sort((prev, next) => {
    return prev > next;
  });

  for (let i = 0; i < quantityPoints; i++) {
    if (statistics[i] === points) {
      playerPosition = i;
      break;
    }
  }

  const stat = {
    playerPosition,
    quantityPoints,
    time,
    notes
  };

  return stat;
};

const renderStringResult = (results) => {
  if (Object.keys(results).length === 0) {
    return -1;
  }
  const {playerPosition, quantityPoints, time, notes} = results;
  let message = `Вы заняли ${playerPosition + correctPositionInArray} место из ${quantityPoints} игроков. Это лучше, чем у ${playerPosition / quantityPoints * 10}% игроков`;
  if (!time === TIME_OUT) {
    message = `Время вышло! Вы не успели отгадать все мелодии!`;
  } else if (!notes) {
    message = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  return message;
};

export {sortGameResults, renderStringResult};
