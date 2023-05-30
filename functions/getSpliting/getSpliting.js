/** 
 * @function getSpliting
 * @param {number} arg1 
 * @param {number} arg2 
 * @returns {number | undefined}
 */

export const getSpliting = (arg1, arg2) => {
  const isValidArg1 = typeof arg1 === 'number' && 
  arg1 > 0 && 
  Number.isInteger(arg1);

  const isValidArg2 = typeof arg2 === 'number' &&
  arg2 > 0 &&
  Number.isInteger(arg2);

  const result = arg1/arg2
  
  if (!isValidArg1 || !isValidArg2) return;

  if (!Number.isInteger(result)) return;

  return  arg1 / arg2;
};
