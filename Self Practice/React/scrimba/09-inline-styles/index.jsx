import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'

/* 
 JSX Inline Styling
 when using inline styles or inline css, you dont use the style attribute, 
 rather you integrate it as an object enclosed in a curly brace {}
 
 return(
   <h1 style={{color: "red", backgroundColor: "darkblue"}}>Hello World!</h1>
   Note: any property that is having a dash is denoted using camel casing. e.g
   backgroundColor and not background-color,
   Instead of:
   <h1 style="color: red; background-color: darkblue">Hello World!</h1>
  )
  Alternatively, you can asign the styles to a variable
  const styles = {
    color: "red",
    backgroundColor: "darkblue",
    fontSize: 32
  }
  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )
  Note: anytime you want to use values you can type the number and the default will be used, 
  or you can add the value in quote, e.g "2rem" if you want a specific unit to be used.
  */
  
 function App(){
  //  const date = new Date(2023, 8, 26, 8) // Morning
  //  const date = new Date(2023, 8, 26, 14) // Afternoon
  //  const date = new Date(2023, 8, 26, 18) // Night
   const date = new Date() // Current Time
   const hours = date.getHours()
   let timeOfDay
   const styles = {
      backgroundColor: "darkblue",
      fontSize: 32
   }
   if (hours < 12) {
     timeOfDay = "Morning"
     styles.color = "green" // Another alternative
   }
   else if (hours >= 12 && hours < 17) {
     timeOfDay = "Afternoon"
     styles.color = "aqua" // Another alternative
   }
   else {
     timeOfDay = "Night"
     styles.color = "red" // Another alternative
   }

  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />,
)