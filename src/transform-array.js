const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

 const transform= (arr) => {
	if (!Array.isArray(arr)) {
		throw new Error("'arr' parameter must be an instance of the Array!");
	 }
	
 let newArr = []
 

  for (let i = 0; i < arr.length; i++) {
	if (typeof arr[i] === 'string') {
		switch(arr[i]) {
			case '--discard-next': 
			   i++
				console.log(arr[i])
			break
			case '--discard-prev':
				if (newArr[i - 1]){
               newArr.pop()
				}
            break
			case '--double-next':
				if (arr[i + 1]){
               newArr.push(arr[i + 1])
				}
				
					
					
				
				
			break
			case '--double-prev':
				if(newArr[i - 1] !== undefined){
				
					let prevRes = newArr[i - 1];
					let prevArr = arr[i - 1];
					if (prevRes === prevArr) {
						newArr.push(prevRes)
					 }  else {
						newArr.push(arr[i]);
					 }
				}
				
           break
			  default:
				newArr.push(arr[i])
          break
      }
		

	}else {
      newArr.push(arr[i])
    }
	   
  }
 return newArr
}
	
  

module.exports = {
  transform
};
