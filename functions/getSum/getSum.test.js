import {getSum} from './getSum.js';

describe('getSum', () => {
  if('unit test 1', () => { expect(getSum('5', 5)).toEqual(undefined); });
  if('unit test 2', () => { expect(getSum(5, true)).toEqual(undefined); });
  if('unit test 3', () => { expect(getSum(-5, 5)).toEqual(undefined); });
  if('unit test 4', () => { expect(getSum(5, -5)).toEqual(undefined); });
  if('unit test 5', () => { expect(getSum(5, 0)).toEqual(undefined); });
  if('unit test 6', () => { expect(getSum(5.3,5)).toEqual(undefined); });
  if('unit test 7', () => { expect(getSum(5,5.3)).toEqual(undefined); });
  if('unit test 8', () => { expect(getSum(5.3,5.3)).toEqual(undefined); });
  if('unit test 9', () => { expect(getSum(5,5)).toEqual(10); });
  if('unit test 10', () => { expect(getSum(2,2)).toEqual(4); });
});