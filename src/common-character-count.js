const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arrayStr;
  if (s1.length > s2.length) {
    arrayStr = s1.split('');
    return countCommonChars(s2, arrayStr)
  } else {
    arrayStr = s2.split('');
    return countCommonChars(s1, arrayStr)
  }
}

function countCommonChars(str, array) {
  let counter = 0;
  for (let index = 0; index < str.length; index++) {
   for (let index1 = 0; index1 < array.length; index1++) {
    if (str[index] === array[index1]) {
      counter++;
      delete array[index1];
      break;
    }
   }
  }
  return counter;
}
module.exports = {
  getCommonCharacterCount
};
