import React from 'react'

const Planets = (props) => {

  return (
    <div className='mb-3 text-2xl'>
      <h3>Planet: {props.name}</h3>
      <p>Number of Moon: {props.moon}</p>
    </div>
  )
}

export default Planets