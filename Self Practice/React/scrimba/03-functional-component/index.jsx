import React from "react"
import ReactDOM from "react-dom"

// Functional Component involves writing your code into functions/sections (known as components)

function MyApp(){
  return (
    <ul>
      <h1>Pet Animals</h1>
      <li>Dog</li>
      <li>Cat</li>
      <li>Parrot</li>
    </ul> 
  )
}

ReactDOM.render(
  <MyApp />,
  document.getElementById("root")
)

/*
NOTE: The function MyApp() mthod is able to render one element, if you want to render more than
one element, you enclose them in a container, e.g <div>
Example:

function MySecond(){
  return (
    <div>
      <ul>
        <h1>Domestic Animals</h1>
        <li>Dog</li>
        <li>Cat</li>
        <li>Parrot</li>
      </ul> 
      <ol>
        <h1>Wild Animals</h1>
        <li>Lion</li>
        <li>Crocodile</li>
        <li>Snake</li>
      </ol> 
    </div>
  )
}

*/