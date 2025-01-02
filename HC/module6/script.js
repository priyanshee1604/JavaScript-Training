//To change the background color of the second column of a table having “n ” rows on click by using querySelector.

//changing color of each cell
// const tablerow = document.querySelectorAll('.tablerow');
// console.log(tablerow);
// function colorchange(e){
//     e.target.style.backgroundColor = "red";
// };
// tablerow.forEach((element)=>element.addEventListener("click",colorchange));

//changing color of row
// const table = document.querySelector('table');
// console.log(table);
// function colorchange(e){
// e.target.style.backgroundColor = "blue";
// };
// table.addEventListener('click', colorchange);

//changing the color using td
// const td = document.querySelectorAll('td');
// // console.log(td);
// function colorchange(e){
//     e.target.style.backgroundColor = "purple";
// };
// td.forEach(element=>element.addEventListener('click', colorchange));


///
// const trr = document.querySelectorAll('tr');
// const tdchild = trr.childNodes.nextSibling;
// console.log(tdchild);

const table = document.getElementById('table');
const rows = table.querySelectorAll('tr');
function changecolor(){
    for(let i=0; i<rows.length; i++){
        rows[i].cells[1].style.backgroundColor = "red";
    }
};
table.addEventListener('click', changecolor);

//
// const table = document.querySelectorAll('tr');
// console.log(table);
// console.log(table[0].children);

// let table = table;
// console.log(table);