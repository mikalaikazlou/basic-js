const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let count = 0;
  let nameDns;
  let arr = [];
  let newArr = domains.map(domain =>
    domain.split('.').reverse());

  for (let index = 0; index < newArr.length; index++) {
    for (let index2 = 0; index2 < newArr[index].length; index2++) {

      if (result.includes(newArr[index][index2])) {
        count++;
      } else{
        nameDns = newArr[index][index2];
        arr.push(newArr[index][index2]);
      }
    }
    result += `'.${nameDns}':${count},`;
  }
  result +='}';
  return result;
}

module.exports = {
  getDNSStats
};
