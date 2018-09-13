/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  let maxEl = max[0];
  for(let i = 1; max.lenght; i++ ){
  	if (max[i]> maxEl){
  		maxEl = max[i];
  	}
  }
  return maxEl;
};

export default max;
