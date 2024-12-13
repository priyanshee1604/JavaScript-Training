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
const concatedarray = arr.concat(arra);
console.log(concatedarray);
concatedarray.push(4);
console.log(concatedarray);
console.log(arra);

//entries() - returns array iterator with key/value pair
const iteratorr = arr.entries();
console.log(iteratorr.next().value);
console.log(iteratorr.next().value);

// entries() and for-of loop
const aa = ['a','b','c'];
const it = aa.entries();
for(const ele of it){
    console.log(ele);
}

// every() - checks if all the elements pass the test or not.
//check for even number

const check = (number) => (number%2 == 0);
console.log(arr.every(check));

const evenArray = [2,4,6,8,0,22,44,24,42,88,64,644];
console.log(evenArray.every(check));