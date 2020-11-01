const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    parseInt(this.chain.getLength);
    return this;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push(value);
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if((position - 1 >= 0 && position - 1 <= this.chain.length - 1) && position !== '' && this.chain[position] !== undefined && !isNaN (position)) {
      this.chain.splice(position - 1, 1)
    } else {
      this.chain = [];
      throw new Error();
    }
    return this;
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    let result = '';
    this.chain.slice(0, this.chain.length - 1).map((item,index) => {
      result = result + '( ' + item + ' )~~'
    });
    result = result + '( ' + this.chain[this.chain.length - 1] + ' )';
    this.chain = [];
    return result;
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
