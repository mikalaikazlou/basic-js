const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let repeatName = {};
  return names.map((value) => {
    if (!repeatName[value]) {
      repeatName[value] = 1;
      return value;
    }
    else {
      let count = repeatName[value];
      repeatName[value] += 1;
      let name = value.concat(`(${count})`);
      repeatName[name] = 1;
      return name;
    }
  });
}

module.exports = {
  renameFiles
};
