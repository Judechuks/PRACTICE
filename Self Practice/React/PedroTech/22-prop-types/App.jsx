import {Person} from "./components/Person"

function App() {

  return ( 
    <div className=''>
      <Person 
        name={"Pedro"}
        email="pedro@gmail.com"
        age={21}
        isMarried={true}
        friends={["Jessica", "Jake", "Jerry", "Jasmine"]}
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