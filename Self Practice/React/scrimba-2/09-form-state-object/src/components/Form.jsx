import React, { useState } from "react";

function Form() {

  const [formData, setFormData] = useState(
    {firstName: "", lastName: ""}
  )
  
  function handleChange(event) {
    setFormData(prevFormData => {
      return {
      ...prevFormData,
      [event.target.name] : event.target.value
      } // newly return object as the current state
    })
  } 
  console.log(formData);

  return (
    <form>
      <div className="input-group">
        <label htmlFor="ln">Last Name: </label>
        <br />
        <input type="text" onChange={handleChange} name="lastName" id='ln' />
      </div>
      <div className="input-group">
        <label htmlFor="fn">First Name: </label>
        <br />
        <input type="text"  onChange={handleChange} name="firstName" id='fn' />
      </div>
    </form>
  )
}
export default Form
/* Asign the input name property, which will be the same for the state object 
property, so that we can distinquish it from others while selecting them */ 