const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  var repeat;
	var separator;
	var additionStr = '';
	if (options['addition'] !== undefined) {
    if(options['additionRepeatTimes'] !== undefined) {
      repeat = options['additionRepeatTimes'];
    } else {
      repeat = 1;
    }
    if(options['additionSeparator'] !== undefined) {
      separator = options['additionSeparator'];
    } else {
      separator = '|';
    }
    for (let repeatLocal = 1; repeatLocal <= repeat; repeatLocal++)
      if(repeatLocal !== repeat) {
        additionStr = additionStr + options['addition'] + separator;
      } else {
        additionStr = additionStr + options['addition'];
      }
	}
  var mainStr = '';
  if(options['repeatTimes'] !== undefined) {
    repeat = options['repeatTimes'];
  } else {
    repeat = 1;
  }
  if(options['separator'] !== undefined) {
    separator = options['separator'];
  } else {
    separator = '+';
  }
  for (let repeatLocal = 1; repeatLocal <= repeat; repeatLocal++)
    if(repeatLocal !== repeat) {
      mainStr = mainStr + str + additionStr + separator;
    } else {
      mainStr = mainStr + str + additionStr;
    }
	return mainStr;
  // remove line with error and write your code here
};
  