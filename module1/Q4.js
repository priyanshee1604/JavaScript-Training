// Provided the following  array:
//     [0, 2, 4, 6, 8, 10, 12, 14, 16]
// Generate and print another list such that: 
//  a. every element being twice of elements in the current list.
//  b. every element being half of the elements in the current list.
const arrray = [0, 2, 4, 6, 8, 10, 12, 14, 16];

function method1(arrray){
    let arrraytwice = [];
    let arrrayhalf = [];
    for(let i=0; i<arrray.length; i++){
        arrraytwice[i] = arrray[i] * 2;
        arrrayhalf[i] = arrray[i] / 2;
    }
    console.log(arrraytwice);
    console.log(arrrayhalf);
}

function method2(arrray){
    let mapped2 = arrray.map((i)=>i*2);
    let mappedhalf = arrray.map((i)=>i/2);
    console.log(mapped2);
    console.log(mappedhalf);
}

method1(arrray);
method2(arrray);