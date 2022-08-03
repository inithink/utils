import {genId} from "./genId";

test('test', () => {
  let test = genId();
  expect(typeof test ==='string');
  expect(test).not.toBeFalsy();
});
