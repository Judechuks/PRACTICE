import React, { useState } from "react";

function Form() {

  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
      retypePassword: "",
      newsletter: true
    }
  )

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  } 

  const [message, setMessage] = useState()
  function handleSubmit(event) {
    event.preventDefault()
    const match = formData.password === formData.retypePassword
    const msg = match ? 
    <p className="success">Successfully signed up</p> : 
    <p className="error">Passwords do not match</p>
    const news = match && formData.newsletter ? <p className="success">Thanks for signing up our newsletter</p> : msg
    setMessage(news); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input type="email" onChange={handleChange} name="email" 
        value={formData.email} placeholder="Your Email" required />
      <input type="password" onChange={handleChange} name="password" 
        value={formData.password} placeholder="New Password" required />
      <input type="password" onChange={handleChange} name="retypePassword"
        value={formData.retypePassword} placeholder="Retype Password" />
      <div className="input-group">
        <input type="checkbox" onChange={handleChange} name="newsletter" id='news' 
        checked={formData.newsletter} />
        <label htmlFor="news">I want to join the newsletter</label>
      </div>
      <button className="btn">Sign Up</button>
      {message}
    </form>
  )
}
export default Form