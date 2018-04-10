import {assert} from "chai";
import createTimeLimit from "./../modules/timer";

describe(`Check timer function`, () => {
  it(`should return -1 if time is zero`, () => {
    assert(createTimeLimit(0) === -1, `time can't be zero`);
  });
  it(`should return a object`, () => {
    assert.typeOf(createTimeLimit(50), `object`);
  });
});
