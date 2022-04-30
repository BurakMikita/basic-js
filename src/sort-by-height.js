const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 const sortByHeight = (arr) => {
	let indexs = []
    arr.forEach((element, index) => {
		 if(element === -1){
			indexs.push(index)
		 }
	 });
	let newArr =  arr.filter(el => el !== -1)
	let sortArr =newArr.sort((a, b) => a - b);
	indexs.forEach(el=>  sortArr.splice(el, 0, -1) )
	return sortArr
}

module.exports = {
  sortByHeight
};
