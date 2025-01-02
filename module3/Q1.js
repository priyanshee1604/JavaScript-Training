// 1. Provided following array:

// [
// {“id”: 1, “name”: “Amit Kumar”, “age”: 25},
// {“id”: 2, “name”: “Rahul Dixit”, “age”: 20},
// {“id”: 3, “name”: “Ravi Joshi”, “age”: 55},
// {“id”: 4, “name”: “Rohit Verma”, “age”: 35},
// {“id”: 5, “name”: “Ajay Jain”, “age”: 17},
// ]

//   a. Print id and name of the youngest and oldest person
//   b. Create another list having id and name of all the person above 18 years
//   c. Find the average age
//   d. Create 2 list with names starting with only ‘A’ and ‘R’ respectively


const people = [
    { id: 1, name: "Amit Kumar", age: 25 },
    { id: 2, name: "Rahul Dixit", age: 20 },
    { id: 3, name: "Ravi Joshi", age: 55 },
    { id: 4, name: "Rohit Verma", age: 35 },
    { id: 5, name: "Ajay Jain", age: 17 },
];

//1. id and name of the youngest and oldest people.
people.sort((a, b)=> a.age - b.age); //sorting in ascending order
console.log(`person with min age: `);
console.log(people[0].id, people[0].name);
console.log(`\nperson with max age: `);
console.log(people[people.length-1].id, people[people.length-1].name);


//2.id and name of the people above 18
const result = people.filter(people => people.age > 18);
console.log(`People with age above 18`); 
console.log(result);

//3. Find the average age
const sum = people.reduce((sum, curr) => sum + curr.age,0);
let avg = sum/people.length;
console.log(`\nthe avg of all the age is ${avg}`);


//4. Create 2 list with names starting with only ‘A’ and ‘R’ respectively
const startswithA = (people) => people.name.startsWith('A');
const startswithR = (people) => people.name.startsWith('R');
let arr = people.filter(startswithA);
let arra = people.filter(startswithR);
console.log(`\nList for which the names starts with A:`);
console.log(arr);
console.log(`\nList for which the names starts with R:`)
console.log(arra);

