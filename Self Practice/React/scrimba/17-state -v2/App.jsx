import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    return (
      <div>
        <h1>You are currently logged {this.state.isLoggedIn ? 'in' : 'out'}</h1>
      </div>
    )
  }

}

export default App

/*
{this.state.isLoggedIn ? 'in' : 'out'}
Alternatively, you can asign the line of code above to a variable (above the 'return' keyword) and add it in between the h1
*/ 