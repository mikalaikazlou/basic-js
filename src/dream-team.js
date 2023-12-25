const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (typeof members !== 'object' || members === null)  {
  return false;
 }
  let resultName ='';
  for (let index = 0; index < members.length; index++) {
    if (typeof members[index] !== 'string') {
    continue;
    }
    let midName = members[index].trim().split(' ');
      resultName += midName[0][0].toUpperCase();
  }
  resultName = resultName.split('').sort().join('');
  return resultName;
}

module.exports = {
  createDreamTeam
};
