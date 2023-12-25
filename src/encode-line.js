const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let count = 1;
  let arrStr = str.split('');

  for (let index = 0; index < arrStr.length; index++) {
    let char = arrStr[index];

   if (arrStr[index] === arrStr[index+1]) {
    count++;
   } else{
    if (count === 1) {
      result += char;
    } else {
      result += `${count}${char}`;
    }
    count = 1;
   }
  }
  return result;
}

module.exports = {
  encodeLine
};
