import React, {Component} from 'react'
import FormComponent from './FormComponent'

class FormContainer extends Component{
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      destination: "",
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type === 'checkbox' ? 
    this.setState(prevState => {
      return {
        dietaryRestrictions: { 
          ...prevState.dietaryRestrictions,  // splitting all the properties from previous state
          [name]: checked 
        } 
      }
    }) : 
    this.setState({[name]: value})
  }

  handleSubmit(){
    // submit the details to your database or API
    console.log("Form Submitted!")
  }

  render() {
    return (
     <FormComponent handleChange={this.handleChange} data={this.state}/>
    )
  }
  // <FormComponent handleChange={this.handleChange} {...this.state}/>
  // {...this.state} 'object with spread operator' will get all the properties of the FormComponent from the FormComponent file and we can call the states by using 'props.firstName', 'props.age', 'props.destination', etc.
  // But when we use this, 
  // <FormComponent handleChange={this.handleChange} data={this.state}/>
  // Then we have to call the states by using 'props.data.firstName', 'props.data.age', etc.
}


export default FormContainer