// .firstElementChild = selects the first child of an element
// .lastElementChild = selects the last child of an element
// .parentElement = selects the parent element
// .nextElementSibling = selects the immediate sibling coming after the selected element
// .previousElementSibling = selects the immediate sibling coming before the selected element
// .children[] = selects the children of a parent element 
// Array.from(.children) = 

let element = document.body; //selects the body element
let firstChild = element.firstElementChild; // selects the first child of the body
firstChild.style.backgroundColor = "lightgreen"; 

let lastChild = element.lastElementChild; // selects the last child of the body
console.log(lastChild);  // script tag

let firstVeg = document.querySelector("#vegetables li"); //selects the first li in <ul id="vegetables">
let vegParent = firstVeg.parentElement;
vegParent.style.border = "3px solid black"; //<ul id="vegetables"> 
let previous = vegParent.previousElementSibling;
previous.style.border = "1px solid black";

let next = vegParent.nextElementSibling;
next.style.border = "1px solid black";

// children array of the vegetables unordered list
let firstVegChild = vegParent.children[0];
firstVegChild.style.color = "red";

let secondVegChild = vegParent.children[1];
secondVegChild.style.color = "green";

let thirdVegChild = vegParent.children[2];
thirdVegChild.style.color = "blue";

// children collection of the vegetables ul (forEach won't work)
// then we introduce 'Array.from(element.children)'

dessertsChildren = Array.from(next.children);
dessertsChildren.forEach(child => child.style.backgroundColor = "red" );