
// let array = [1,2,3,4,5];
// let products = [];
// for(let i=0; i<array.length; i++){
//     let product = fetch(`https://fakestoreapi.com/products/${array[i]}`).then(response=>{console.log(response.json())});
// };


let array = [1,2,3,4,5];
let products = [];
for(let i=0; i<array.length; i++){
    let product = fetch(`https://fakestoreapi.com/products/${array[i]}`).then(response=>response.json()).then(data => console.log(`parese data: ${data.title}`));
};