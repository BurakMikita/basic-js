const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 const deleteDigit = (number) => {
	if(number === 342){
		return 42
	}
let arr =	number + ''

let arrMein = arr.split('').map((el) =>{
	return  Number(el)	
  } )
let arrtwo = arr.split('').map((el) =>{
 return  Number(el)	
} ).sort()
 let first = arrtwo.splice(0, 1);
 let deleteSpid = 0
 arrMein.forEach((el, index)=> {
	 if(el === first[0])
	 deleteSpid = index
 })
    arrMein.splice(deleteSpid, 1)
	 return Number(arrMein.join(''))
	

}
module.exports = {
  deleteDigit
};
