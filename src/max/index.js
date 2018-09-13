/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {


 let newArr = arr.filter(function(number) {
  return isFinite(number);});
  let max = newArr[0];
 for(let i=1; i<newArr.length; i++){
 if( newArr[i] > max)  {
 	if(newArr[i] != NaN){
 		max = newArr[i];
 	}
 	
   }
  }


return max;
 

};

export default max;
