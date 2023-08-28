import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'

/* 
JSX variables and expressions
 when using variable or expressions that will be integrated into html (jsx), then enclose it in a curly brace {}
 const first_name = "Jude";
 const last_name = "Monye";
 using it in jsx
 return(
  <h1>Hello {first_name + " " + last_name}!</h1>
  Alternatively,
  <h1>Hello {`${first_name} ${last_name}`}!</h1>
  )
  */

 function App(){
  //  const date = new Date(2023, 8, 26, 8) // Morning
  //  const date = new Date(2023, 8, 26, 14)  // Afternoon
  //  const date = new Date(2023, 8, 26, 22)  // Night
   const date = new Date()  // Current time
   const hours = date.getHours()
   let timeOfDay

   if (hours < 12) {
     timeOfDay = "morning"
   }
   else if (hours >= 12 && hours < 17) {
     timeOfDay = "afternoon"
   }
   else {
     timeOfDay = "night"
   }

   return (
    <h1>Good {timeOfDay}!</h1>
   )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />,
)