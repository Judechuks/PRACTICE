import React from "react"
import ReactDOM from "react-dom"
import MyInfo from "./component/MyInfo"

/* 
Creating a separate file for a specific component 
Best practice is to name the file, same as the function name
*/

ReactDOM.render(
  <MyInfo />,
  document.getElementById("root")
)