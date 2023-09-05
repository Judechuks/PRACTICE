import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
  }
  
  render(){
    function handleClick() { alert('Hey!')}
    return (
      <div className="grid gap-7">
        <img src="./src/assets/team1.jpg" onMouseOver={handleClick} alt="team 1"/>
        <button onClick={handleClick} className="border-2 border-black w-fit py-1 px-2 rounded-xl">Click Me</button>
      </div>
    )
  }
}
  
export default App

/*
when using the events, the events should be in camel casing, as seen in the example above
*/ 