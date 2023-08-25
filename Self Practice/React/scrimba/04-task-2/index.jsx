import React from "react"
import ReactDOM from "react-dom"

function MyInfo(){
  return (
    <div>
      <h1>Monye Jude</h1>
      <p>A frontend developer, currently learning ReactJS</p>
      <ul>
        <h2>Vacation Spots</h2>
        <li>Canada</li>
        <li>USA</li>
        <li>China</li>
      </ul> 
    </div>
  )
}

ReactDOM.render(
  <MyInfo />,
  document.getElementById("root")
)