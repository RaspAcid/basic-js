const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, totalDepth = [], current = 1) {
    totalDepth.push(current);
    arr.forEach(element => {
      if(Array.isArray(element))
      this.calculateDepth(element, totalDepth, current + 1);
    })
    return Math.max.apply(Math, totalDepth);
  }
};