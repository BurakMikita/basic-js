const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 const getSeason = (data) => {

	if (data == null){
		return 'Unable to determine the time of year!'
	} 
	if (data instanceof Date == false)throw new Error ('Invalid date!');

	
	
	
		let month = 0;
	  let seson = '';
	  let number = 0
	  try { 
		number  = data.getMonth()
	 }
	  catch {
		throw new Error ('Invalid date!');
	  }
	
	
	
	
	if (number === 1) {
		seson = 'winter';
	}else if (number === 2) {
		seson = 'spring';
	} else if (number === 3) {
		seson = 'spring';
	} else if (number === 4) {
		seson = 'spring';
	}  else if (number === 5) {
		seson = 'summer';
	}  else if (number === 6) {
		seson = 'summer';
	}  else if (number === 7) {
		seson = 'summer';
	}  else if (number === 8) {
		seson = 'autumn';
	}  else if (number === 9) {
		seson = 'autumn';
	}  else if (number === 10) {
		seson = 'autumn';
	}  else if (number === 11) {
		seson = 'winter';
	}  else if (number === 0) {
		seson = 'winter';
	}  else {
		throw new Error("Invalid date!");
	 }
	return  seson
	}
	
	
	

	
	

module.exports = {
  getSeason
};
