/**
 * @function getSum
 * @param {string || '' || number } arg1 
 * @param {string || '' || number } arg2 
 * @returns {number}
 */


export const getSum = (arg1, arg2) => {

  if (typeof arg1 !== 'number' || typeof arg2 !==  'number') return undefined;
  
  if (arg1 <= 0 || arg2 <= 0) return undefined;
  
  if (Number.isInteger(arg1/arg2)) return arg1 + arg2
  
  return arg1 + arg2;
  }
