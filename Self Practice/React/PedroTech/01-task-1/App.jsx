import React from 'react'

function App() {
  return ( 
    <div>
      <Job name="Jake" salary={90000} position="Senior SDE" company="Amazon"/>
      <Job name="Jack" salary={12000} position="Junior SDE" company="Google"/>
      <Job name="Jessica" salary={10000} position="Project Manager" company="Netflix"/>
    </div>
  )
}

function Job(props) {
  return (
    <div className='mb-4 text-2xl font-bold'>
      <h2>Name: {props.name}</h2>
      <h2>Works at: {props.company}</h2>
      <h2>Position: {props.position}</h2>
      <h2>Salary: {props.salary}</h2>
    </div>
  )
}

export default App 