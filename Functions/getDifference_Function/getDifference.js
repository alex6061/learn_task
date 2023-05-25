/**
 * @function getDifference
 * @param {string || number || boolean} arg1 
 * @param {string || number || boolean} arg2 
 * @returns {number}
 */

export const getDifference = (arg1, arg2) => {
  if (typeof arg1 !== 'number' || typeof arg2 !== 'number') return undefined;

  if (arg1 <= 0 || arg2 <= 0) return undefined;

  if (arg1 < arg2) return undefined

  return arg1 - arg2
}