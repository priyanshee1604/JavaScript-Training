// Provided the following  array: [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
// Find the sum, min, and max
// Print “List is full of prime no” if every element is prime
// Print “List has a prime no” if there is a prime no in it
// Remove duplicate values from the list.
// Remove duplicate values from the list without using loop or any of the above methods (map(), filter(), reduce(), some() and every())
// let array = [10, 2, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
let array =  [2, 97, 19];
function isPrime(num){
    if(num<2) return false;
    for(let y=2; y<num; y++){
        if(num%y === 0) return false;
    }
    return true;
}

const sum = array.reduce((summ, curr) => summ + curr, 0);
const min = Math.min(...array);
const max = Math.max(...array);

console.log(`sum: ${sum}, min: ${min}, max: ${max}`);
array.every(isPrime)? console.log("List is full of prime no"): console.log(`List is not full of prime no.`); 
array.some(isPrime)? console.log("List has a prime no") : console.log(`List has no prime no`);

function removeDuplicates(array){
    let set = new Set(array);
    console.log(set);
}
removeDuplicates(array);
