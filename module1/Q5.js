//   Provided the following  array:
//     [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
//   a. Find the sum, min, and max
//   b. Print “List is full of prime no” if every element is prime
//   c. Print “List has a prime no” if there is a prime no in it
//   d. Remove duplicate values from the list ()

const arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

function sum(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    console.log(`The sum of the array is ${sum}`);
}

function minimum(arr){
    let mini = Number.MAX_VALUE;
    for(let i=0; i<arr.length; i++){
        if(arr[i] <= mini){
            mini = arr[i];
        }
    }
    console.log(`The minimum value in the array is ${mini}.`);
}

function maximum(arr){
    let maxi = Number.MIN_VALUE;
    for(let i=0; i<arr.length; i++){
        if(arr[i] >= maxi){
            maxi = arr[i];
        }
    }
    console.log(`The maximum value in the array is ${maxi}.`);
}

function isPrime(num){
    if(num<2) return false;
    for(let y=2; y<num; y++){
        if(num%y === 0) return false;
    }
    return true;
}

function checkForPrime(arr){
    for(let i=0; i<arr.length; i++){
        if(!isPrime(arr[i])){
            return;
        }
    }
    console.log(`The List is full of Prime Numbers.`);
}

function checkForAtlestOnePrime(arr){
    for(let i=0; i<arr.length; i++){
        if(isPrime(arr[i])){
            console.log(`The list has atleast ONE Prime Number.`);
            break;
        }
    }
}

function removeDuplicates(arr){
    let set = new Set(arr);
    console.log(set);
}

sum(arr);
minimum(arr);
maximum(arr);
checkForPrime(arr);
checkForAtlestOnePrime(arr);
removeDuplicates(arr);