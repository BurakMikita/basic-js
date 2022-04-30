const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 const getMatrixElementsSum = (arr) => {
	let result = 0
	  let ColumCount =  arr[0].length
	for (let i = 0; i < ColumCount; i++) {
		for (let j = 0; j < arr.length; j++) {
		 if  (arr[j][i] == 0){
			j += 3
		 }
		 else {
		
			result += arr[j][i]
		 }
		}
	 }
		 return result
	}

module.exports = {
  getMatrixElementsSum
};
