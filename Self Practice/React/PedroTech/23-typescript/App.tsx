import React from "react"
import {Person, Country} from "./components/Person"

function App() {

  //const getAge = (name: string):number => 99

  return ( 
    <div className=''>
      <Person 
        name={"Pedro"}
        email="pedro@gmail.com"
        age={21}
        // age={getAge("Pedro")}
        isMarried={true}
        friends={["Jessica", "Jake", "Jerry", "Jasmine"]}
        country={Country.Brazil}
      />
    </div>
  )
}

export default App 
/*
Read the Person component file first.
friends={["Jessica", "Jake", 99, true, "John", {Pedro}]}
The propType give a feedback when, a wrong data type is passed to a prop,
Although it doesn't break the code, but instead gives an error message.
*/ 