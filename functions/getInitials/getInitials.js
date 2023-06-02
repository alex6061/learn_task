/**
 * @function getInitials
 * @param {string} name 
 * @returns {string | undefined}
 */

// export const getInitials = (name) => {
//   return (name[0][0] + '.' + name[1][0]).toUpperCase()
// };

export const getInitials = (name) => {
  const toUpperName = name.toUpperCase()
  const isNameSplit = toUpperName.split(' ');
  const newArr = isNameSplit.map(item => [item])
  const newName = newArr[0];
  const newSurname = newArr[1];
  const nameLetter = newName.toString().substring(0,1);
  const surnameLetter= newSurname.toString().substring(0,1);
  return `${nameLetter}.${surnameLetter}`;
};
