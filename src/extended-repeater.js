const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resultStr = '';
  let separator = '';

  if (options.addition) {
    for (let index = 0; index < options.additionRepeatTimes; index++) {
      separator += options.addition;
    }
  }
  separator += options.separator;

  for (let index = 0; index < options.repeatTimes; index++) {
    resultStr += `${str}`;
    if (index !== (options.repeatTimes - 1)) {
      if (!options.separator) {
        resultStr += `+`;
      } else {
        resultStr += `${separator}`
      }
    }
  }
  if (options.addition) {
    resultStr += options.addition;
  }
  return resultStr;
}

module.exports = {
  repeater
};
