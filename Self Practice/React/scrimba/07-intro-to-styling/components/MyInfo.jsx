import React from "react"

function MyInfo(){
    return (
      <div className="main m-3">
        <h1 className="text-3xl font-bold mx-">Monye Jude</h1>
        <p>A frontend developer, currently learning ReactJS</p>
        <ul className="my-5">
          <h2>Vacation Spots</h2>
          <li className="before:content-['\2605'] before:mr-4">Canada</li>
          <li className="before:content-['\2605'] before:mr-4">USA</li>
          <li className="before:content-['\2605'] before:mr-4">China</li>
        </ul> 
      </div>
    )
  }
  
export default MyInfo