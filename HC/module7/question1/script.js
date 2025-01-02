
const elee = document.querySelector('table');

elee.addEventListener("click", toggleColor);

function toggleColor(e){
    console.log(e.target);
    e.target.classList.toggle("red");
};