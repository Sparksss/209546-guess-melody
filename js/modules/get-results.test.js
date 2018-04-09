import {assert} from "chai";
import getResults from "./../modules/get-results";


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
