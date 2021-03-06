import {assert} from "chai";
import {getResults} from "./../modules/get-results";

const answers = [];
const notComplete = [];
const question = () => {
  return {
    answer: true,
    timeLimit: Math.trunc(Math.random() * (60 - 5) + 5)
  };
};
for (let i = 10; i--;) {
  answers.push(question());
}
describe(`Check user points`, () => {
  it(`should return -1 if answers less 10`, () => {
    assert(getResults(new Array(3).fill({answer: true})) === -1, `number answers should be equal and greater than ten`);
    assert.equal(-1, getResults(new Array(5).fill({answer: true, timeLimit: 40})[`sum`], 1), `quantity of answers less ten`);
    assert.notEqual(10, getResults(notComplete, 2)[`sum`], `optional testing :check number of quantity answers`);
  });
  it(`should return 10 if answers is true but time greater than 30 seconds for one question`, () => {
    assert.equal(10, getResults(new Array(10).fill({answer: true, timeLimit: 40}), 1)[`sum`]);
  });
  it(`should return if sum points greater than ten`, () => {
    assert(getResults(answers, 1)[`sum`] >= 10, `error`);
  });
  it(`should error if arguments is not array`, () => {
    assert.equal(-1, getResults(`string`));
  });
});
