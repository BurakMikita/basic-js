const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
	arr: [],
	getLength() {

	return this.arr.length

	},
	addLink(value = '()') {
		let str = `( ${value} )`
	   this.arr.push(str)
		return this
	},
	removeLink(positin) {
		if (!Number.isInteger(positin) || positin > this.arr.length ||positin <= 0){
		this.arr=[];
      throw new Error("You can't remove incorrect link!");
	}else{
		this.arr.splice(positin - 1, 1);
    return this
	}
	},
	reverseChain() {
		this.arr.reverse();
		return this;
	},
	finishChain() {
	   let show = this.arr.join('~~');
    this.arr = [];
    return show;
	}
 };



module.exports = {
  chainMaker
};
