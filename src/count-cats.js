const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let counter = 0;
  for (let index = 0; index < matrix.length; index++) {
   for (let index1 = 0; index1 < matrix[index].length; index1++) {
    if (matrix[index][index1] === '^^') {
      counter++;
    }
   }
  }
  return counter;
}

module.exports = {
  countCats
};
