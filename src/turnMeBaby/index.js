/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
	
	if (typeof str === "string" || str.length != 0 || typeof str != "number"  ) {
 return String(str).split('').reverse().join('');

	}
	else{
		throw  Error();
	}

};

export default turnMeBaby;
