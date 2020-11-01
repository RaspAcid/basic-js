const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr.constructor === !Array){
    return "ERROR";
  } else {
    let newArr = arr.reduce((total, item, index) => {
    if(item === '--discard-next' || 
      item === '--discard-prev' ||
      item === '--double-prev' ||
      item === '--double-next'){
        return total;
      }
        
      if(arr[index - 1] === '--discard-next') {
        return total;
      }
      if(arr[index - 1] === '--double-next') {
        total.push(item, item);
      } else {
        total.push(item);
      }
      if(arr[index + 1] === '--discard-prev'){
        total.splice(total.length - 1, 1);
      }
      if(arr[index + 1] === '--double-prev') {
        total.push(item);
      }
      return total;
      }, []);
      return newArr;
  // remove line with error and write your code here
}
};
