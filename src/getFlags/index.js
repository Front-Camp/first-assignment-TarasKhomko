/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {

 let obj1 = arr[0];
 let obj2  = arr[1];

 let arr1 = obj1.flags;
 let arr2 = obj2.flags;
return arr1.concat(arr2);

};

export default getFlags;
