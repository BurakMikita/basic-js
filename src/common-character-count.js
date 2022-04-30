const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 const getCommonCharacterCount = (arg, twoagr) =>{
	let arr = arg.split('')
	let twoarr = twoagr.split('')
	console.log(twoarr)
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
	  if(twoarr.includes(arr[i])){
		sum++;
		const index = twoarr.indexOf(arr[i]);
		twoarr.splice(index, 1)
	  }
	  
  }

	return sum
}


module.exports = {
  getCommonCharacterCount
};
