const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let number = 0;
  const strNumber = n.toString();

  number = strNumber.slice(1, strNumber.length);

  for (let index = 0; index < strNumber.length; index++) {
    let checkNumber = strNumber.split('');
     delete checkNumber[index];
    checkNumber = +checkNumber.join('')
    if (number < +checkNumber) {
      number = +checkNumber;
    }
  }
  return +number;
}

module.exports = {
  deleteDigit
};
