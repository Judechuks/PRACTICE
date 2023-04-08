// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)
// .innerText

const ul = document.createElement("ul");
const h2 = document.createElement("h2");
// h2.innerHTML = "Welcome";
// h2.innerText = "Welcome";
h2.textContent = "Fruits";
document.body.append(ul);  // attaching it to the body
// ul.appendChild(h2);  // same output as in the above

// list items
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
li1.textContent = "apple";
li2.textContent = "banana";
li3.textContent = "orange";
li4.textContent = "mango";
ul.append(li1);
ul.appendChild(li2);
ul.append(li3);  //attached at the end
ul.prepend(h2);  // attach it to the beginning of the ul
ul.insertBefore(li4, li3);  //inserted li4 before li3

// alternatively, we can get all the elements
// ul.insertBefore(li4, ul.getElementsByTagName("li")[2]);  //inserting li4 before the third li
