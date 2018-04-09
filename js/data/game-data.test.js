import {assert} from "chai";
import getResults from "./../modules/get-results";
import sortGameResults from "./../modules/sort-results";
import createTimeLimit from "./../modules/timer";


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
    assert.typeOf(sortGameResults([10, 11, 15, 17, 23], {points: 14}), `string`);
  });
  it(`should return -1 if player results is empty`, () => {
    assert.equal(-1, sortGameResults([10, 11, 15, 17, 23], {}), `result player is empty`);
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
