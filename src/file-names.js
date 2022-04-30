const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

 function renameFiles(files) {
	let arr = []


	for (let i = 0; i < files.length; i++) {
	  if(arr.includes(files[i])){
		 let count = 1
			let newFile =  `${files[i]}(${count})`
			while(arr.includes(newFile)) {
			 count++
			 newFile = `${files[i]}(${count})`
			 
			}
			arr.push(newFile)
		  
	  }else {
		 arr.push(files[i])
	  }
	  
		
	}
	return arr
}

module.exports = {
  renameFiles
};
