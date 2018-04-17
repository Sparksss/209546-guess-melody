import {assert} from "chai";
import createTimeLimit from "./../modules/timer";

describe(`Check timer function`, () => {
  it(`should return -1 if time is zero`, () => {
    assert.typeOf(createTimeLimit(0).tick(), `string`);
  });
  it(`should return a object`, () => {
    assert.typeOf(createTimeLimit(50), `object`);
  });
  it(`timer should be less than 50 seconds`, () => {
    assert(createTimeLimit(50).tick() < 50);
  });
});
