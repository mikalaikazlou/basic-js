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
 * => ' STRING PLUS 00 PLUS 00 PLUS ** STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatT = Object.hasOwn(options, "repeatTimes") ? options.repeatTimes : 1;
  let septr = Object.hasOwn(options, "separator") ? options.separator : '+';
  let addition = Object.hasOwn(options, "addition") ? String(options.addition) : '';
  let addSeptr = Object.hasOwn(options, "additionSeparator") ? options.additionSeparator : '|';
  let addSeptrTimes = Object.hasOwn(options, "additionRepeatTimes") ? options.additionRepeatTimes : 1;

  let additionStr = Array(addSeptrTimes).fill(addition).join(addSeptr);

  return Array(repeatT).fill(str + additionStr).join(septr);
}

module.exports = {
  repeater
};
