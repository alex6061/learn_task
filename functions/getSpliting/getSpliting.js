/**
 * @function getSpliting
 * @param {number} arg1 
 * @param {number} arg2 
 * @returns {number} number or empty
 */


export const getSpliting = (arg1, arg2) => {

  const isSplitingArg1 = typeof arg1 !== 'number' &&
   arg1 > 0 &&
    arg1 < arg2 &&
     !Number.isInteger(arg1);

  const isSplitingArg2 = typeof arg2 !== 'number' &&
   arg2 > 0 &&
    arg1 < arg2 &&
     !Number.isInteger(arg2);

  if (isSplitingArg1 || isSplitingArg2 ) return;

  return  arg1 / arg2
};

