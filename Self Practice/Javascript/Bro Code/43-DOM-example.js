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