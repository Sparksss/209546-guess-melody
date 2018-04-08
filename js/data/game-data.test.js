import {assert} from "chai";

const getResults = (answers, numbersOfNotes = 0) => {
  const MIN_ANSWERS = 10;
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

const sortGameResults = (statistics, {points, numbersOfNotes, theRestOfTime}) => {
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


const createTimeLimit = (time) => {
  if (!time && typeof time === `number`) {
    return `time should be greater than zero`;
  }
  const timer = {
    timeLimit: time,
    tick() {
      if (this.timeLimit > 0) {
        --this.timeLimit;
      } else {
        return `time is over!`;
      }
    }
  };

  return timer;
};


describe(`Check user points`, () => {
  it(`should return -1 if answers less 10`, () => {
    assert(getResults([1, 1, 1, 1]) === -1, `number answers should be equal and greater than ten`);
    assert.equal(-1, getResults([1, 1, 1, 1], 1));
    assert.notEqual(10, getResults([1, 1, 1, 1, 1], 2));
  });
  it(`should return 10 if answers is true but time greater than 30 seconds for one question`, () => {
    assert.equal(10, getResults([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1));
  });
  it(`should error if arguments is not array`, () => {
    assert.equal(-1, getResults(`string`));
  });
});

describe(`Check points of users`, () => {
  it(`should return a string`, () => {
    assert.typeOf(sortGameResults([10, 11, 15, 17, 23], {points: 14, numbersOfNotes: 1, theRestOfTime: 30}), `string`);
  });
  it(`should return -1 if player results is empty`, () => {
    assert(sortGameResults([10, 11, 15, 17, 23], {}) === -1, `result player is empty`);
  });

  describe(`Check timer function`, () => {
    it(`should return -1 if time is zero`, () => {
      assert(createTimeLimit(0) === -1, `time can't be zero`);
    });
    it(`should return a object`, () => {
      assert.typeOf(createTimeLimit(50), `object`);
    });
  });
});
