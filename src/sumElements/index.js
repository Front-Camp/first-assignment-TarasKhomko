/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
let newArrs = []
let newArr = arr;
  let sum = 0;
 for(let i=0; i<newArr.length; i++){
 	if(!isNaN(newArr[i])){
	newArrs.push(Number((newArr[i]))); 
 	} else {
 		newArrs.push(parseInt((newArr[i]))); 
 	}
  }
  let full = newArrs.filter(function(number) {
   	if(number != Infinity && number !=NaN){
		return number;
   	} 
});
 for(let i=0; i<full.length; i++){
 		sum += full[i];
  }

  return sum;
};

export default sumElements;
