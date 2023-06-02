/**
 * @function getInitials
 * @param {string} name 
 * @returns {string}
 */

export const getInitials = (name) => {
  const words = name.toUpperCase().split(' ');
  if (words.length < 2) return '';
  return `${words[0][0]}.${words[1][0]}`;
};
