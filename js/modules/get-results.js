const MIN_ANSWERS = 10;
const MAX_TIME_LIMIT_BONUS = 30;
const getResults = (answers, numbersOfNotes = 0) => {
  let sum = 0;
  if (!Array.isArray(answers) || answers.length < MIN_ANSWERS || numbersOfNotes === 0) {
    return -1;
  }

  for (let i = answers.length; i--;) {
    if (answers[i].answer) {
      if (answers[i].timeLimit < MAX_TIME_LIMIT_BONUS) {
        ++sum;
      }
      ++sum;
    } else {
      sum -= 2;
    }
  }

  return sum;
};

export default getResults;
