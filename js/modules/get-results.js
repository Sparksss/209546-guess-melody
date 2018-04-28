const MIN_ANSWERS = 10;
const MAX_TIME_LIMIT_BONUS = 30;
let speedScore = 0;
const getResults = (answers, notes = 0) => {
  let sum = 0;
  if (!Array.isArray(answers) || answers.length < MIN_ANSWERS || notes === 0) {
    return -1;
  }

  for (let i = answers.length; i--;) {
    if (answers[i].answer) {
      if (answers[i].timeLimit < MAX_TIME_LIMIT_BONUS) {
        ++sum;
        speedScore++;
      }
      ++sum;
    } else {
      sum -= 2;
    }
  }

  return sum;
};

export {getResults, speedScore};
