import {assert} from "chai";
import sortGameResults from "./../modules/sort-results";

describe(`Check points of users`, () => {
  it(`should return a string`, () => {
    assert.typeOf(sortGameResults([10, 11, 15, 17, 23], {points: 14}), `string`);
  });
  it(`should return -1 if player results is empty`, () => {
    assert.equal(-1, sortGameResults([10, 11, 15, 17, 23], {}), `result player is empty`);
  });
});
