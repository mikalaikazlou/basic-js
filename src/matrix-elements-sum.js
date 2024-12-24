const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let resulSum = 0;
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let colIndex = 0; colIndex < cols; colIndex++) {
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
     
      let elem = matrix[rowIndex][colIndex];
      if (+elem !== 0) {
        resulSum += elem;
      }else{
        break;
      }
    }
  }
  return resulSum;
}

module.exports = {
  getMatrixElementsSum
};
