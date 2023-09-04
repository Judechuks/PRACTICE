import React, { Component } from "react"

class App extends Component{
  constructor() {
    super()
    this.state = {
      name: 'Jude',
      age: 35
    }
  }

  render() {
    return (
      <div className="font-bold text-xl">
        <h1 className="font-bold text-3xl">{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    )
  }
}
  
export default App