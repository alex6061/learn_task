import {getSplitting} from './getSplitting.js';


describe('getSplliting', () => {
  if('unit test 1', () => { expect(getSplliting('5', 5)).toEqual(undefined); });
  if('unit test 1', () => { expect(getSplliting(5, true)).toEqual(undefined); });
  if('unit test 1', () => { expect(getSplliting(-5, 5)).toEqual(undefined); });
  if('unit test 1', () => { expect(getSplliting(5, -5)).toEqual(undefined); });
  if('unit test 1', () => { expect(getSplliting(5, 0)).toEqual(undefined); });
  if('unit test 1', () => { expect(getSplliting(0, 5)).toEqual(undefined); });
  if('unit test 1', () => { expect(getSplliting(5, 3)).toEqual(undefined); });
  if('unit test 1', () => { expect(getSplliting(5, 5)).toEqual(1); });
  if('unit test 1', () => { expect(getSplliting(15, 5)).toEqual(3); });
})


