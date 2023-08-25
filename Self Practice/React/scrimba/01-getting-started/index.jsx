import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(
  <div>
    <h1>Hello World</h1>
    <p>My first page using ReactJS</p>
  </div>, 
  document.getElementById("root")
)

/* 
You can do it in the old fashion way by creating the element 
and appending it to the parent element.
 
var p = document.createElement("p")
p.innerHTML = "This is a new paragraph"
document.getElementById("root").appendChild(p)
*/

/*
NOTE: The render() method is able to render one element, if you want to render more than
one element, you enclose them in a container, e.g <div>
*/