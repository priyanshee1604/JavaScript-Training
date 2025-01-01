// Implement code for sum using recursion
const array = [1,2,3,4,5,6,7,7,89,10];
function sum(array, n){
    // console.log(array[n]);
    if(n < 0)
        return 0;
    else 
        return array[n] + sum(array, n-1);
}
console.log(sum(array, array.length-1));