/*
let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";
*/

let fruits = document.getElementsByName("fruits");
fruits.forEach(fruit => {
  if(fruit.checked){
    console.log(fruit.value);
  }
});

let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightgreen";
vegetables[2].style.backgroundColor = "grey";

let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "purple";
desserts[1].style.backgroundColor = "crimson";

let element = document.querySelector("#myTitle");
element.style.backgroundColor = "lightgreen";

let ul = document.querySelector("ul");
ul.style.backgroundColor = "lightgrey";

let label = document.querySelector("[for]"); // selects the first label with attribute of 'for'
// let label = document.querySelector("[for=name]"); //label with attribute of 'for' value of 'name'
label.style.color = "green";
label.style.fontWeight = "bold";

// let labels = document.querySelectorAll("[for"); 
// select all the labels with attribute of 'for' and forms an array with it.