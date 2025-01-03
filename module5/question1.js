// Implement 2 event listener on click event of 
// which one executes on bubbling and while other on capture
const div = document.querySelector("div");
const button = document.querySelector("button");
function eventHandler(e){
    console.log(`${e.target.tagName}, ${e.currentTarget.tagName}`);
};

//in bubble phase thus seq: button div
div.addEventListener("click", eventHandler);
button.addEventListener("click", eventHandler);

//in capture phase thus seq: div button
div.addEventListener("click", eventHandler, {capture: true});
button.addEventListener("click", eventHandler, {capture: true});