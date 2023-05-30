/**
 * @function getDifference
 * @param {number} arg1 
 * @param {number} arg2 
 * @returns {number | undefined}
 */

export const getDifference = (arg1, arg2) => {
  const isValidArg1 = typeof arg1 === 'number' &&
    arg1 > 0 && 
    Number.isInteger(arg1);
  
  const isValidArg2 = typeof arg2 === 'number' &&
    arg2 > 0 && 
    Number.isInteger(arg2);

  const isValidComparison = (arg1 >= arg2);

  if (!isValidArg1 || !isValidArg2 || !isValidComparison) return;

  return arg1 - arg2;
};
