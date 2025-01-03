// // 3. Provided the following  array:
// //     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //    Filter out odd, even, and prime numbers and print them

//removing them as varibale take extra space
// const oddNumbers = (value) => value%2!=0 ? true : false;
// const evenNumbers = (value) => value%2==0 ? true:false;

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let value;

function primeNumbers(value){
    for(let i=0; i<value; i++){
        if(!(isPrime(value))){
            continue;
        }else{
            return true;
        }
    }
    return false;
}

function isPrime(num){
    if(num<2) return false;
    for(let y=2; y<num; y++){
        if(num%y == 0) return false;
    }
    return true;
}

const even = array.filter((value) => value%2!==0 ? true : false);
const odd = array.filter((value) => value%2===0 ? true:false);
const prime = array.filter(primeNumbers);
console.log(`Even Numbers: ${even}.`);
console.log(`Odd Numbers: ${odd}.`);
console.log(`Prime Numbers: ${prime}.`);