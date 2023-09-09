import React, {Component} from 'react'

class App extends Component{
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favColor: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
  }

  handleSubmit(){
    // submit the details to your database or API
    console.log("Form Submitted!")
  }

  render() {
    return (
      <form className='p-3' onSubmit={this.handleSubmit}>
        <input type="text" name='firstName' value={this.state.firstName} onChange={this.handleChange} placeholder='First Name' className='px-2'/>
        <br /> <br />
        <input type="text" name='lastName' value={this.state.lastName} onChange={this.handleChange} placeholder='Last Name'  className='px-2'/>
        <br /> <br />
        <textarea name='msg' value={this.state.msg} onChange={this.handleChange} placeholder='Leave your comments here!' className='px-2'/>
        <br />
        <label>
          <input type="checkbox" name='isFriendly' checked={this.state.isFriendly} onChange={this.handleChange} className=''/> is Friendly?
        </label>
        <br />
        <label>
          <input type="radio" name='gender' value="Male" checked={this.state.gender === "Male"} onChange={this.handleChange} className=''/> Male
        </label>
        <label>
          <input type="radio" name='gender' value="Female" checked={this.state.gender === "Female"} onChange={this.handleChange} className='ml-2'/> Female
        </label>
        <br />
        <label htmlFor="color">Favorite Color:</label>
        <select name="favColor" onChange={this.handleChange} value={this.state.favColor} id="color">
          <option value="purple">Blue</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="pink">Pink</option>
          <option value="purple">Purple</option>
        </select>
        <br />
        <button className='rounded px-3 bg-blue-700'>SUBMIT</button>
        
        {/*========== Output ==========*/}
        <h1 className='text-3xl font-bold'>Output</h1>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <p>{this.state.msg}</p>
        <p>you are a {this.state.gender}</p>
        <p>your favorite color is {this.state.favColor}</p>
      </form>
    )
  }
}

export default App