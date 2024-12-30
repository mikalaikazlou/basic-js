const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
   if (!(date instanceof Date) || isNaN(date)) {
        throw new Error('Invalid date!');
    }
    const month = date.getMonth();
    const day = date.getDate();

    if ((month === 11 && day >= 21) || month === 0 || month === 1 || (month === 2 && day < 20)) {
        return 'winter';
    } else if ((month === 2 && day >= 20) || month === 3 || month === 4 || (month === 5 && day < 21)) {
        return 'spring';
    } else if ((month === 5 && day >= 21) || month === 6 || month === 7 || (month === 8 && day < 23)) {
        return 'summer';
    } else {
        return 'autumn';
    }
}

module.exports = {
  getSeason
};
