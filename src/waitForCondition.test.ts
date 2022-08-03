import {waitForCondition} from "./waitForCondition";

test('test', async () => {
  let index = 0;
  await waitForCondition(async () => {
    index++;
    return index > 5;
  }, 10);
});
