/**
 * @function sumTwoSmallestNumbers
 * @param {number} numbers 
 * @returns {number | undefined}
 */

export const sumTwoSmallestNumbers = (numbers) => {
    const getSortNumbers = numbers.sort((a,b) => a - b);
    const result = getSortNumbers[0] + getSortNumbers[1];
    return result;
  };
  