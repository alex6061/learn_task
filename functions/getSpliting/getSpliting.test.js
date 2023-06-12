import { getSplitting } from "./getSplitting.js";

describe('getSplitting', () => {
  if('unit test 1', () => { expect(getSplitting('5', 5)).toEqual(undefined); });
  if('unit test 1', () => { expect(getSplitting(5, true)).toEqual(undefined); });
  if('unit test 1', () => { expect(getSplitting(-5, 5)).toEqual(undefined); });
  if('unit test 1', () => { expect(getSplitting(5, -5)).toEqual(undefined); });
  if('unit test 1', () => { expect(getSplitting(5, 0)).toEqual(undefined); });
  if('unit test 1', () => { expect(getSplitting(0, 5)).toEqual(undefined); });
  if('unit test 1', () => { expect(getSplitting(5, 3)).toEqual(undefined); });
  if('unit test 1', () => { expect(getSplitting(5, 5)).toEqual(1); });
  if('unit test 1', () => { expect(getSplitting(15, 5)).toEqual(3); });
});
