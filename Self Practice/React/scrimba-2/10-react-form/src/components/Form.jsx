import React, { useState } from "react";

function Form() {

  const [formData, setFormData] = useState(
    {
      firstName: "", lastName: "", email: "", 
      comment: "", isFriendly: true, employment: "",
      favColor: ""
    }
  )

  function handleChange(event) {
    const {name, value, type, checked} = event.target // destructuring the name and value
    setFormData(prevFormData => {
      return {
      ...prevFormData,
      [name] : type === 'checkbox' ? checked : value // checkbox doesnt have value
      } // newly return object as the current state
    })
  } 

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData); 
  } 

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="ln">Last Name: </label>
        <br />
        <input type="text" onChange={handleChange} name="lastName" id='ln' value={formData.lastName}/>
      </div>
      <div className="input-group">
        <label htmlFor="fn">First Name: </label>
        <br />
        <input type="text" onChange={handleChange} name="firstName" id='fn' value={formData.firstName} />
      </div>
      <div className="input-group">
        <label htmlFor="em">Email: </label>
        <br />
        <input type="email" onChange={handleChange} name="email" id='em' value={formData.email} />
      </div>
      <div className="input-group">
        <label htmlFor="com">Comments: </label>
        <br />
        <textarea cols={22} onChange={handleChange} name="comment" id='com' value={formData.comment} />
      </div>
      <div className="input-group">
        <input type="checkbox" onChange={handleChange} name="isFriendly" id='frnd' 
        checked={formData.isFriendly} />
        <label htmlFor="frnd">Are you friendly?</label>
      </div>
      <br />
      <fieldset>
        <legend>Current employment status</legend>
        <div className="input-group">
          <input type="radio" onChange={handleChange} name="employment" id='un' 
          value="unemployed" checked={formData.employment === "unemployed"} />
          <label htmlFor="un">Unemployed</label>
        </div>
        <div className="input-group">
          <input type="radio" onChange={handleChange} name="employment" id='pt' 
          value="part-time" checked={formData.employment === "part-time"} />
          <label htmlFor="pt">Part-time</label>
        </div>
        <div className="input-group">
          <input type="radio" onChange={handleChange} name="employment" id='ft' 
          value="full-time" checked={formData.employment === "full-time"} />
          <label htmlFor="ft">Full-time</label>
        </div>
      </fieldset>
      <br />
      <div className="input-group">
        <label htmlFor="color">What is your favorite color?</label>
        <br />
        <select onChange={handleChange} name="favColor" id='color' 
        value={formData.favColor}>
          <option disabled value=""> --- Choose --- </option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
      </div>
      {/* <input type="submit" value="Submit" className="btn"/> */}
      <button className="btn">SUBMIT</button>
    </form>
  )
}
export default Form
/* Asign the input name property, which will be the same for the state object 
property, so that we can distinquish it from others while selecting them 
Controlled Component is allowing React to pass values from the stateto the 
inputs instead of the input passing values to the state e.g 
'value={formData.firstName}' */ 