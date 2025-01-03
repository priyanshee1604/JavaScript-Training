let promise = fetch('https://fakestoreapi.com/products');
console.log(promise); // prints an object of type promise - in pending state.

//chaining promise
promise.then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error));
//promise async --> //.json() async thus we changed promises here.
// Implement a simple code to use a Promise
let myPromise = new Promise((resolve, reject)=>{
    let truee = true;
    if(truee){
        resolve("Promise resolved");
    }else{
        reject("Prmise rejected");
    }
});

myPromise.then(result => alert(result)).catch(err => alert(err));