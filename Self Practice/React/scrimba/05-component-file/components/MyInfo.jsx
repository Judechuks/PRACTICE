// We have to import React so so to make the JSX executable, without it, the JSX would result to syntax error
import React from "react"

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

// We have to export the function, so we can import and use it in the index.js file
export default MyInfo