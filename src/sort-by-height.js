const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexHeigth = [];
  const newArr = [];
  const lengthArr = arr.length;

  for (let index = 0; index < lengthArr; index++) {
    if (arr[index] === -1) {
      indexHeigth.push(index);
    } else {
      newArr.push(arr[index]);
    }
  }

  let sortedArr = newArr.sort((a, b) => {
    return a - b;
  });
  
  let indexSortedArr = 0;
  let resultArr = [];

  for (let index = 0; index < lengthArr; index++) {
    if (indexHeigth.includes(index)) {
      resultArr.push(-1);
    } else {
      resultArr.push(sortedArr[indexSortedArr++]);
    }
  }

  return resultArr;
}

module.exports = {
  sortByHeight,
};
