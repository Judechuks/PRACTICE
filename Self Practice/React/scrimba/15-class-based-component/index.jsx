import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

class App extends React.Component{
  render(){
    const user = window.prompt('Your Name')
    return (
      <div>
        <Header username={user}/>
        <Greeting />
      </div>
    )
  }
}

/*
Class Component
class App extends React.Component{}
Alternatively, you can use: 
class App extends Component{}
then you would import Component from react by:
import React { Component } from 'react'
*/

class Header extends React.Component{
  render(){
    return (
      <header className='text-3xl font-bold'>
        <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }
}

class Greeting extends React.Component{
  render(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if (hours < 12){
      timeOfDay = "morning"
    }
    else if (hours >= 12 && hours < 17){
      timeOfDay = "afternoon"
    }
    else {
      timeOfDay = "night"
    }
    return (
      <div>
        <h1 className='text-xl font-bold'>Good {timeOfDay} to you, sir or madam!</h1>
      </div>
    )
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />,
) 