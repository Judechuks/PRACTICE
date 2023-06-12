// DOM - Document Object Model
//document.getElementById;
//document.getElementsByClassName; // selects elements (collections; like array)
//document.getElementsByTagName; // selects elements (collections; like array)
//document.querySelectorAll; // selects node (nodelist; like array)
//const evenDivs = view1.querySelectorAll("div:nth-child(odd)"); // selects node (nodelist; like array) 'odd numbers' 
const view1 = document.querySelector(".view1");
const view2 = document.querySelector(".view2");
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)"); // selects node (nodelist; like array) 'even numbers' (2n, 3n, 4n, etc)
for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "blue";
}
// textContent = to change text (textnode) alone
// innerText = to change text (textnode) alone
// innerHTML = to change or add html tag or text to a node or element 

const header = document.querySelector("header");
header.innerHTML = "<h1>Hello!</h1> <p>Check the console</p>";

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children); //collectionlist
console.log(evenDivs[0].parentElement.childNodes); //nodelist
console.log(evenDivs[0].parentElement.hasChildNodes()); 
console.log(evenDivs[0].parentElement.lastChild); 
console.log(evenDivs[0].parentElement.lastElementChild); 
console.log(evenDivs[0].parentElement.firstElementChild); 
console.log(evenDivs[0].nextSibling); 
console.log(evenDivs[0].nextElementSibling); 
console.log(evenDivs[0].previousElementSibling); 

// view1.style.display = "none";
view2.style.display = "flex";

while (view2.lastChild) {
  view2.lastChild.remove();
}

//document.createElement("ElementTag"); // ElementTag is the tag of the element e.g (div, p, br, h1)

const createDivs = (parent, iteration) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iteration;
  newDiv.style.backgroundColor = "#002";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.append(newDiv);
}
// createDivs(view2, 6);
for (let i = 1; i <= 12; i++) {
  createDivs(view2, i);
}
