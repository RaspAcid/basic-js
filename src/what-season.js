const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) {
      return 'Unable to determine the time of year!';}
    var myDate = date,
    month = myDate.getMonth();
    if(myDate.getYear() < 1970) {
      var nullDate = new Date(0),
        diff = myDate.getTime() - nullDate.getTime(),
        finalDate = new Date(diff);
        month = finalDate.getMonth();
    } else {
      month = month;
    }
    if(month === 11 || month === 0 || month === 1) {
      return "winter";
    } else if (month >=2 && month <=4) {
      return "spring";
    } else if (month >=5 && month <=7) {
      return "summer";
    } else {
      return "fall";
    }
  }
  // remove line with error and write your code here
;
