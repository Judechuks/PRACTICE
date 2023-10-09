import React, { useState } from "react";

function Form() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  
  function handleFirstName(event) {
    setFirstName(event.target.value)
  }  
  function handleLastName(event) {
    setLastName(event.target.value)
  }  

  return (
    <form>
      <div className="input-group">
        <label htmlFor="ln">Last Name: </label> {lastName}
        <br />
        <input type="text" placeholder='Last Name' onChange={handleLastName} id='ln' />
      </div>
      <div className="input-group">
        <label htmlFor="fn">First Name: </label> {firstName}
        <br />
        <input type="text" placeholder='First Name' onChange={handleFirstName} id='fn' />
      </div>
    </form>
  )
}
export default Form