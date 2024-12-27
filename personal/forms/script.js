//by default when submitting forms the page refreshes thus we need to handle it in some way.
//using formData object in JS.

let form = document.forms; //this returns an array of forms. if not use getElementById
console.log(form);

form[0].addEventListener("submit", (e) => {
    e.preventDefault();
});

//used to create form with already a given data. used to send HTTP requests.
// let formdata  = new FormData('form');
// console.log(formdata);

//another way to access the form
// let formm = document.forms.form;
// console.log(formm);

//accessing the elements
let username = form[0].elements['username'];
console.log(username.value);
console.log(form[0].password);
console.log(form[0].elements['testing']);
console.log(form[0].elements['radiotest']);

let select = form[0].elements['testtheselect'];
let options = select.options;
console.log(options);
for(let i=0; i<options.length; i++){
    console.log(options[i].value);
}
