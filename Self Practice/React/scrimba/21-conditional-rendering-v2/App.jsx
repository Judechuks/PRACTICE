import React, { Component } from "react"

class App extends Component{
  constructor(){
    super()
    this.state = {
      UnreadMessages: [
        "Call from Mom",
        "You have a message in spam"
      ]
    }
  }

  render() {
    return (
      <div>
        {/* if unread message is 0 return nothing (null) */}
        {
          this.state.UnreadMessages.length > 0 && 
          <h1 className="text-4xl font-bold">
            You have {this.state.UnreadMessages.length} unread messages!</h1>
        }
      </div>
    )
  }
}
  
export default App

/*
The And '&&' operator can be used in place of the 'if else' and 'ternary' operator.
The AND operator only gives true when both operands are true.
example:
if a = true, b = false
a && b would return the value of a (left hand side)
b && a would return the value of b (left hand side)
a && a would return the value of a (right hand side)
b && b would return the value of b (right hand side)
Summary:
Immediately it sees the truth as the left hand side, it returns the right hand side (no matter the value).
Immediately it sees the false as the left hand side, it returns the left hand side (no matter the value).
*/ 