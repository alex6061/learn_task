import { getSplitting } from './getSplitting.js';

describe('getSplitting', () => {
  it('unit test 1', () => { expect(getSplitting('5', 5)).toEqual(undefined); });
  it('unit test 1', () => { expect(getSplitting(5, true)).toEqual(undefined); });
  it('unit test 1', () => { expect(getSplitting(-5, 5)).toEqual(undefined); });
  it('unit test 1', () => { expect(getSplitting(5, -5)).toEqual(undefined); });
  it('unit test 1', () => { expect(getSplitting(5, 0)).toEqual(undefined); });
  it('unit test 1', () => { expect(getSplitting(0, 5)).toEqual(undefined); });
  it('unit test 1', () => { expect(getSplitting(5, 3)).toEqual(undefined); });
  it('unit test 1', () => { expect(getSplitting(5, 5)).toEqual(1); });
  it('unit test 1', () => { expect(getSplitting(15, 5)).toEqual(3); });
});
