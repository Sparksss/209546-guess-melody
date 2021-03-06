const MIN_ANSWERS = 10;
const MAX_TIME_LIMIT_BONUS = 30;
const getResults = (answers, notes = 0) => {
  let sum = 0;
  let speedScore = 0;
  if (!Array.isArray(answers) || answers.length < MIN_ANSWERS || notes === 0) {
    return -1;
  }

  for (const current of answers) {
    if (current.answer) {
      if (current.timeLimit < MAX_TIME_LIMIT_BONUS) {
        ++sum;
        ++speedScore;
      }
      ++sum;
    } else {
      sum -= 2;
    }
  }

  return {sum, speedScore};
};

export {getResults};
