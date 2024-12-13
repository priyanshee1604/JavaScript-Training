array = new Array();
console.log(array);
console.log(typeof(array));

const arr = [1,2,3,4,5];
console.log(arr);

const arra = new Array(3,0,6,4,2,1,3,4,5);
console.log(arra);

//using spread operator 
const [a,b, ...arrr] = [1,2,3,4,5,6,7,7,8,99,9];
console.log(a,b,arrr);

//lenght of array
const arrayy = new Array(3);
console.log(`Created an array of size ${arrayy.length}`);

//---------------------------------------------------------------STATIC METHODS OF ARRAY

console.log(Array.isArray(arra)); 
// isArray method returns true only if array is constructed using Array literal or Array constructor.
console.log(arrr instanceof Array);
// isArray is prefered over the instanceof method

//-------------------------------------------------------------INSTANCE METHODS OF ARRAY

