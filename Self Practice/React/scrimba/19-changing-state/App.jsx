import React, { Component } from "react"

class App extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this) // binding a method
  }
  handleClick() {
    // this.setState({count: 1})  // Changing a State
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })  // Changing a State
  }
  render() {
    return (
      <div className="grid place-content-center gap-10">
        <h1 className="text-8xl font-bold text-center">
          {this.state.count}
        </h1>
        <button type="button" onClick={this.handleClick} className="border-2 border-black w-fit py-1 px-2 rounded-xl hover:bg-gray-600 justify-self-center">
          Increment
        </button>
      </div>
    )
  }
}
  
export default App

/*
When the userdefined method is invoked, on the event, then 'this' has to be used to precede the method 
setState: is a built in method from react, that is used to change the state object in the constructor method.
To change the state, pass an object to the setState, with the properties that you need. In most cases, you would want to get the previous state by using a function in the state object, so as to modify the state. the parameter can be any variable name. in the example used above, the parameter was 'prevState'
NOTE:
Anything you are using your own method, you need to bind it to bind it to the class 'App'
And you would do that in the constructor, as seen above.
*/ 