import {sleep} from "./sleep";

export async function waitForCondition(callback: () => boolean, waitTimeInSeconds = 10) {
  let maxLoop = waitTimeInSeconds * 10;
  for (let i = 0; i < maxLoop; i++) {
    if (callback()) {
      return;
    }
    await sleep(100);
  }
  throw new Error('condition not satisfied');
}
