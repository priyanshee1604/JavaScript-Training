const button = document.querySelector('button');
// function callbackfun(event){
//     if(event.button === 1){
//         console.log('left');
//     }else if(event.button === 2){
//         console.log('right');
//     }else{
//         console.log(`middle`);
//     }
// }

function keydetection(event){
    console.log(event);
}
button.addEventListener('click', keydetection);