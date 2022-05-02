const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */


 function dateSample(sampleActivity) {
	
	if(typeof sampleActivity !== 'string'){
		return false
	}
	if(!sampleActivity.trim()){
	  return false
  }
  
  let sampleActivityNew =  Number(sampleActivity)
  if(sampleActivityNew == 0){
	  return false
  }
  if(   isNaN(sampleActivityNew)  ) {
	  return false
  }


  let k = 0.693 / 5730

  let result = Math.log(15 / sampleActivityNew) / k
	let ears = Math.ceil(result)
	if(ears >0){
		return ears
	}else {
		return false
	}
}




module.exports = {
  dateSample
};
