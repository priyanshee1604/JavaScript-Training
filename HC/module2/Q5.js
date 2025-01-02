// Provided the following  array: [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
// Find the sum, min, and max
// Print “List is full of prime no” if every element is prime
// Print “List has a prime no” if there is a prime no in it
// Remove duplicate values from the list.
// Remove duplicate values from the list without using loop or any of the above methods (map(), filter(), reduce(), some() and every())
// Given array
let array = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const sum = array.reduce((acc, curr) => acc + curr, 0);
const min = Math.min(...array);
const max = Math.max(...array);

console.log(`sum: ${sum}, min: ${min}, max: ${max}`);

const allPrime = array.every(isPrime);
if (allPrime) {
    console.log("List is full of prime no");
}

const hasPrime = array.some(isPrime);
if (hasPrime) {
    console.log("List has a prime no");
}

function removeDuplicates(array){
    let set = new Set(array);
    console.log(set);
}
removeDuplicates(array);
