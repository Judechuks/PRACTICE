import React, { Component } from "react"
import Conditional from "./components/Conditional"

class App extends Component{
  constructor(){
    super()
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2000);
  }

  render() {
    return (
      <div>
        {
          this.state.isLoading ? 
          <h1 className="text-4xl font-bold">Loading...</h1> :
          <Conditional />
        }
      </div>
    )
  }
}
  
export default App

/*
The setTimeout was used in the 'componentDidMount' (State Management Method) method to serve as the delay that will occur when data is being fetched from an API.
*/ 