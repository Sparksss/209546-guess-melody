const MIN_ANSWERS = 10;
const getResults = (answers, numbersOfNotes = 0) => {
  if (!Array.isArray(answers) || answers.length < MIN_ANSWERS || numbersOfNotes === 0) {
    return -1;
  }

  let points = answers.reduce((prev, next) => {
    if (next) {
      prev++;
    } else {
      prev -= 2;
    }
    return prev;
  });
  return points;
};

export default getResults;
