// Provided the following  array:
//     [0, 2, 4, 6, 8, 10, 12, 14, 16]
// Generate and print another list such that: 
//  a. every element being twice of elements in the current list.
//  b. every element being half of the elements in the current list.
const arrray = [0, 2, 4, 6, 8, 10, 12, 14, 16];
const halfarr = arrray.map(value => value/2);
const doublearr = arrray.map(value => value*2);
console.log(`half array ${halfarr}.`);
console.log(`double array ${doublearr}.`);