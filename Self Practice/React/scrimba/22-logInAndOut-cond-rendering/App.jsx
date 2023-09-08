import React, {Component} from 'react'

class App extends Component{
  constructor(){
    super()
    this.state = {
      isLoggedin: true
    }
    this.logInAndOut = this.logInAndOut.bind(this)
  }

  logInAndOut(){
    this.setState(prevState => {
      return {
        isLoggedin: !prevState.isLoggedin
      }
    })
  }

  render() {
    return (
      <div>
        <header className='flex justify-between p-4 bg-gray-900'>
          <img src="./src/assets/react.svg" alt="Logo" />
          {this.state.isLoggedin ? <button type='submit' onClick={this.logInAndOut} className='rounded px-3 bg-red-700'>Log Out</button> :
          <button type='submit' onClick={this.logInAndOut} className='rounded px-3 bg-blue-700'>Log In</button>}
        </header>
        <main className='min-h-[80.4vh] p-2'>
          <h1 className='Text-lg font-bold'>{this.state.isLoggedin ? 'You are logged In' : 'You are logged Out'}</h1>
        </main>
        <footer className='p-4 bg-gray-900 text-white'>
          <p className='text-center'>Copyright &copy; Judechuks</p>
        </footer>
      </div>
    )
  }
}
export default App

/*
// Alternatively,
render(){
  let buttonText = this.state.isLoggedin ? 'LOG OUT' : 'LOG IN'
  let displayText = this.state.isLoggedin ? 'You are logged in' : 'You are logged out'
  return (
    <div>
      <button onClick={this.logInAndOut}>{buttonText}</button>
      <h1>{displayText}</h1>
    </div>
  )
}
*/ 