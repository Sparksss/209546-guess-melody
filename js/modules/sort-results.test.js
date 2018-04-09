import {assert} from "chai";
import {sortGameResults, renderStringResult} from "./../modules/sort-results";

const putArray = () => {
  let arr = [];
  for (let i = 6; i--;) {
    arr.push(Math.trunc(Math.random() * (30 - 10) + 10));
  }
  return arr;
};

describe(`Check points of users`, () => {
  it(`should return a object`, () => {
    assert.typeOf(sortGameResults(putArray(), {points: 14, notes: 2, time: 10}), `Object`);
  });
  it(`should return -1 if player results is empty`, () => {
    assert.equal(-1, sortGameResults(putArray(), {}), `result player is empty`);
  });
  it(`should return -1 if time out`, () => {
    assert.equal(-1, sortGameResults(putArray(), {points: 14, notes: 0, time: 10}), `notes is null`);
    assert.equal(-1, sortGameResults(putArray(), {points: 14, notes: 0, time: 0}), `time's out`);
  });
  it(`Object should be is empty`, () => {
    assert.equal(-1, renderStringResult({}), `Object is empty`);
  });
});
