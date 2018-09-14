/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {

let newArr = [];
let newArrss = [];
 for(let i=0; i<arr.length; i++){
 newArr.push(arr[i].flags.toString());
	
}
let newArrs = newArr.toString().split(',');
 for(let i=0; i<newArrs.length; i++){
 newArrss.push(Number(newArrs[i]));
	
}

return newArrss;


};

export default getFlags;
