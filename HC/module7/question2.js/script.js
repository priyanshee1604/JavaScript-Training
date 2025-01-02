let textarea = document.getElementById('textarea');
let button = document.getElementById('button');
button.addEventListener('click', savingthedata);
window.addEventListener('beforeunload', alertMess);

let save = false;

function savingthedata(){
    if(textarea.value){
        save = true;
    }else{
        alert('enter something.');
    }
}

function alertMess(e){
    if(!save){
        e.preventDefault();
        alert("You did not save the content");
    }
}
