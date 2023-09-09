import React, {Component} from 'react'

class App extends Component{
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }
/*
  handleChange(event){
    this.setState({
      // firstName: event.target.value
      //If you want to pick a particular property, you will then you the code below instead./
      //event.target.name: event.target.value // the property can not be a string, instead wrap it in a []
      [event.target.name]: event.target.value // as shown here
    })
*/
  // You can refractor the setState as:
  handleChange(event){
    const {name, value} = event.target // as shown here
    this.setState({
      [name]: value // and here
    })
  }
  /*
  make sure that the name property from the input matches the state property of the method.
  e.g name="firsName" and the setState{firstName: ""}
  To force the input value to be the value of the state, you have to set the value property of the input to be the state.
  e.g value={this.state.firstName}
  */ 

  render() {
    return (
      <form className='p-3'>
        <input type="text" name='firstName' value={this.state.firstName} placeholder='First Name' onChange={this.handleChange} className='px-2'/>
        <br /> <br />
        <input type="text" name='lastName' value={this.state.lastName} placeholder='Last Name' onChange={this.handleChange} className='px-2'/>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </form>
    )
  }
}

export default App