/**
 * @function getCountOfVowels
 * @param {string} str 
 * @returns {number}
 */

export const getCountOfVowels = (str) => {
  const toLowerStr = str.toLowerCase();
  const vowels = 'aeiuo';
  let result =0;

  for (const char of toLowerStr) {
    if (vowels.includes(char)) ++result
  }
  return result;
};

console.log(getCountOfVowels('hellow'))