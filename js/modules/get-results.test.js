import {assert} from "chai";
import getResults from "./../modules/get-results";

const answers = [];
const answ = [];
const notComplete = [true, true, true, true];
const question = () => {
  return {
    answer: true,
    timeLimit: Math.trunc(Math.random() * (60 - 5) + 5)
  };
};
for (let i = 10; i--;) {
  answers.push(question());
}

for (let i = 10; i--;) {
  answ.push({answer: true});
}

describe(`Check user points`, () => {
  it(`should return -1 if answers less 10`, () => {
    assert(getResults(notComplete) === -1, `number answers should be equal and greater than ten`);
    assert.equal(-1, getResults(notComplete, 1), `quantity of answers less ten`);
    assert.notEqual(10, getResults(notComplete, 2), `optional testing :check number of quantity answers`);
  });
  it(`should return 10 if answers is true but time greater than 30 seconds for one question`, () => {
    assert.equal(10, getResults(answ, 1));
  });
  it(`should return if sum points greater than ten`, () => {
    assert(getResults(answers, 1) >= 10, `error`);
  });
  it(`should error if arguments is not array`, () => {
    assert.equal(-1, getResults(`string`));
  });
});
