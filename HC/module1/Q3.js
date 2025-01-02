//Provided the following  array:
//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Filter out odd, even, and prime numbers and print them

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function oddNumbers(array) {
    console.log(`odd numbers: `);
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            console.log(array[i]);
        }
    }
}

function evenNumbers(array) {
    console.log(`even numbers: `);
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            console.log(array[i]);
        }
    }
}

function primeNumbers(array){
    console.log(`prime numbers: `)
    for(let i=0; i<array.length; i++){
        if(!(isPrime(array[i]))){
            continue;
        }else{
            console.log(array[i]);
        }
    }
}

function isPrime(num){
    if(num<2) return false;
    for(let y=2; y<num; y++){
        if(num%y == 0) return false;
    }
    return true;
}

oddNumbers(array);
evenNumbers(array);
primeNumbers(array);