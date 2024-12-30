// Implement a simple code to use a Promise

let promise = fetch('https://fakestoreapi.com/products');
console.log(promise);

promise.then((response)=>{console.log(response.json())});


let promiise = new Promise(setTimeout(resolve, 10000));
const resolve = ()=> console.log(`hello world`);
