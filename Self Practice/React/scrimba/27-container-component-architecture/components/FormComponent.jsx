import React from 'react'

function FormComponent(props) {
  let vegan = props.data.dietaryRestrictions.isVegan ? "Yes" : "No"
  let kosher = props.data.dietaryRestrictions.isKosher ? "Yes" : "No"
  let lactose = props.data.dietaryRestrictions.isLactoseFree ? "Yes" : "No"
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
      <form className='p-3' onSubmit={props.handleSubmit}>
        <input type="text" name='firstName' value={props.data.firstName} onChange={props.handleChange} placeholder='First Name' className='px-2'/>
        <br /> <br />
        <input type='text' name='lastName' value={props.data.lastName} onChange={props.handleChange} placeholder='Last Name' className='px-2'/>
        <br /> <br />
        <input type='number' name='age' value={props.data.age} onChange={props.handleChange} placeholder='Age' className='px-2'/>
        <br />
        <label>
          <input type='radio' name='gender'value="Male" checked={props.data.gender === "Male"} onChange={props.handleChange} className=''/> Male
        </label>
        <label>
          <input type='radio' name='gender'value="Female" checked={props.data.gender === "Female"} onChange={props.handleChange} className='ml-2'/> Female
        </label>
        <br /> 
        <label htmlFor="dest">Destination:</label>
        <select name="destination" id="dest" value={props.data.destination} onChange={props.handleChange}>           
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
          <input type="checkbox" name="isVegan" checked={props.data.dietaryRestrictions.isVegan} onChange={props.handleChange} /> Vegan?
        </label>
        <label>
          <input type="checkbox" name="isKosher" checked={props.data.dietaryRestrictions.isKosher} onChange={props.handleChange} className='ml-2'/> Kosher?
        </label>
        <label>
          <input type="checkbox" name="isLactoseFree" checked={props.data.dietaryRestrictions.isLactoseFree} onChange={props.handleChange} className='ml-2'/> Lactose Free?
        </label>
        <br /> <br /> 
        <button className='rounded px-3 bg-blue-700'>SUBMIT</button>
        <br /> <br />
        
        <h1 className='text-2xl font-bold'>OUTPUT</h1>
        <p>Good {timeOfDay}
          {" "}{props.data.gender ? (props.data.gender === 'Male' ? 'Mr.' : 'Mrs.') : null}
          {" "}{props.data.firstName} {props.data.lastName}
        </p>
        <p>You're {props.data.age} years old</p>
        <p>Your destination is {props.data.destination}</p>
        <p>Restricted on Vegetables?: {vegan}</p>
        <p>Restricted on Koshers?: {kosher}</p>
        <p>Lactose free?: {lactose}</p>
      </form>
    </main>
  )
}

export default FormComponent