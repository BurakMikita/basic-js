const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, {repeatTimes = 1,	separator = "+",	addition = "",
	additionRepeatTimes = 1,
	additionSeparator = "|",}) {
		str = String(str) ;
		addition = String(addition)
		let additionStr = '';
		for (let i = 1; i <= additionRepeatTimes; i++) {
			if (addition) additionStr += addition;
			if (i != additionRepeatTimes) additionStr += additionSeparator;
		 }
      
		 let Newstr = ''
		 for (let j = 0; j < repeatTimes; j++) {

			Newstr +=   str + additionStr 
			if(j + 1 != repeatTimes){
				Newstr += separator 
			}
			
			 
		 }

		 return Newstr
		 console.log(Newstr)
}




module.exports = {
  repeater
};
