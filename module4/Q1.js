// Implement code to deep clone an object using JSON methods

//shallow copy of an object is that if you change the nested value of the object then the orginal object changes as
//it refrence to the original object only

const object1 = {
    id: 1,
    name: "Priyanshee Sisodiya",
    subjects: ['Maths', 'Science', 'Physics', 'Chemistry', 'Hindi', 'English'],
    marks: {
        Maths: 92,
        Science: 92,
        Physics: 90,
        Chemistry: 87,
        Hindi: 80,
        English: 94
    }
};
console.log(object1);


//creating a shallow copy of an object
// const obj2 = object1;
// const obj2 = Object.assign({},object1);
const obj2 = {...object1};

console.log(`Printng the value before change from the Object1: ${object1.marks.Maths}`);
console.log(`Printng the value before change from the Object2: ${obj2.marks.Maths}`);
obj2.marks.Maths = 100;
console.log(`Printng the value  from the Object1: ${object1.marks.Maths}`);
console.log(`Printng the value from the Object2: ${obj2.marks.Maths}`);

console.log(`\n\nnon affecting values`);
//non affecting values
console.log(`Printng the value before change from the Object1: ${object1.id}`);
console.log(`Printng the value before change from the Object2: ${obj2.id}`);
object1.id = 3;
obj2.id=0;
console.log(`Printng the value  from the Object1: ${object1.id}`);
console.log(`Printng the value from the Object2: ${obj2.id}`);

//creating a deep copy
//first converting the object to string 
// then converting back to the JS object 
// and then manipulation the nested value
// let deepcopy = JSON.parse(JSON.stringify(object1));
let stringg = JSON.stringify(object1);
// console.log(stringg);
let deepcopy = JSON.parse(stringg);
console.log(deepcopy);
console.log(`\n\n`);
console.log(`Doing changes on the depep copy`);


//changing the deepcopy and comparing values
console.log(`Printng the value before change from the Object1: ${object1.marks.Maths}`);
console.log(`Printng the value before change from the Object2: ${deepcopy.marks.Maths}`);
deepcopy.marks.Maths = 111;
console.log(`Printng the value  from the Object1: ${object1.marks.Maths}`);
console.log(`Printng the value from the Object2: ${deepcopy.marks.Maths}`);




// JSON methods won't work for deep copying if your object contains non-serializable structures like Map, Set, or RegExp.
// READ ABOUT SERIALIZABLE AND NON SERIALIZABLE DS.
// //in deep copy we cannot preserve nested map set regex.
// let original = {
//     date: new Date(),
//     map: new Map([["key", "value"]]),
//     set: new Set([1, 2, 3]),
//     regex: /abc/gi,
//     normal: "Just a string"
// };

// // Deep copy using JSON methods
// let deepCopy = JSON.parse(JSON.stringify(original));

// console.log("Original:", original);
// console.log("Deep Copy:", deepCopy);

// // Check individual properties
// console.log("Original date:", original.date, "Deep Copy date:", deepCopy.date);
// console.log("Original map:", original.map, "Deep Copy map:", deepCopy.map);
// console.log("Original set:", original.set, "Deep Copy set:", deepCopy.set);
// console.log("Original regex:", original.regex, "Deep Copy regex:", deepCopy.regex);

// //not preserved.
// let regex = /abc/gi;
// let set = new Set([1, 2, 3]);
// let map = new Map([["key", "value"]]);
// let date = new Date();

// let original = {
//     date: date,
//     map: map,
//     set: set,
//     regex: regex,
//     normal: "Just a string"
// };

// let deepCopy = JSON.parse(JSON.stringify(original));
// console.log(deepCopy);