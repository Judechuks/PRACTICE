import React, {Component} from 'react'

class App extends Component{
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

  /*
  // Alternatively, you can do this instead,
  handleChange(event){
    const {name, value, type, checked} = event.target
    type === 'checkbox' ? 
    this.setState({ [name]: checked }) : 
    this.setState({[name]: value})
  }
  // Then you have to add the 'isVegan', 'isKosher', 'isLactoseFree' as properties in the setState initialization
  */

  handleSubmit(){
    // submit the details to your database or API
    console.log("Form Submitted!")
  }

  render() {
    let vegan = this.state.dietaryRestrictions.isVegan ? "Yes" : "No"
    let kosher = this.state.dietaryRestrictions.isKosher ? "Yes" : "No"
    let lactose = this.state.dietaryRestrictions.isLactoseFree ? "Yes" : "No"
    let timeOfDay;
    let hours = new Date().getHours();
    if (hours < 12){
      timeOfDay = 'morning'
    }
    else if (hours > 12 && hours < 17){
      timeOfDay = 'afternoon'
    }
    else {
      timeOfDay = 'evening'
    }
    return (
      <main>
        <form className='p-3' onSubmit={this.handleSubmit}>
          <input type="text" name='firstName' value={this.state.firstName} onChange={this.handleChange} placeholder='First Name' className='px-2'/>
          <br /> <br />
          <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange} placeholder='Last Name' className='px-2'/>
          <br /> <br />
          <input type='number' name='age' value={this.state.age} onChange={this.handleChange} placeholder='Age' className='px-2'/>
          <br />
          <label>
            <input type='radio' name='gender'value="Male" checked={this.state.gender === "Male"} onChange={this.handleChange} className=''/> Male
          </label>
          <label>
            <input type='radio' name='gender'value="Female" checked={this.state.gender === "Female"} onChange={this.handleChange} className='ml-2'/> Female
          </label>
          <br /> 
          <label htmlFor="dest">Destination:</label>
          <select name="destination" id="dest" value={this.state.destination} onChange={this.handleChange}>           
            <option>-- YOUR DESTINATION --</option>
            <option value="Japan">Japan</option>
            <option value="USA">USA</option>
            <option value="Ireland">Ireland</option>
            <option value="China">China</option>
            <option value="South Korea">South Korea</option>
          </select>
          <br /> <br />
          <label>Dietary Restrictions:</label> <br />
          <label>
            <input type="checkbox" name="isVegan" checked={this.state.dietaryRestrictions.isVegan} onChange={this.handleChange} /> Vegan?
          </label>
          <label>
            <input type="checkbox" name="isKosher" checked={this.state.dietaryRestrictions.isKosher} onChange={this.handleChange} className='ml-2'/> Kosher?
          </label>
          <label>
            <input type="checkbox" name="isLactoseFree" checked={this.state.dietaryRestrictions.isLactoseFree} onChange={this.handleChange} className='ml-2'/> Lactose Free?
          </label>
          <br /> <br /> 
          <button className='rounded px-3 bg-blue-700'>SUBMIT</button>
          <br /> <br />
          
          <h1 className='text-2xl font-bold'>OUTPUT</h1>
          <p>Good {timeOfDay}
            {" "}{this.state.gender ? (this.state.gender === 'Male' ? 'Mr.' : 'Mrs.') : null}
            {" "}{this.state.firstName} {this.state.lastName}
          </p>
          <p>You're {this.state.age} years old</p>
          <p>Your destination is {this.state.destination}</p>
          <p>Restricted on Vegetables?: {vegan}</p>
          <p>Restricted on Koshers?: {kosher}</p>
          <p>Lactose free?: {lactose}</p>
        </form>
      </main>
    )
  }
}

export default App