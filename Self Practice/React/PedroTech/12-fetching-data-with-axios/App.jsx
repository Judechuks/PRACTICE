import { useState, useEffect} from 'react'
import Axios from 'axios'
// 
function App() {
  const [name, setName] = useState('')
  //const [age, setAge] = useState(0)// for the age
  const [person, setPerson] = useState(null)// or ({}) for the object

  const predictAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((response) => {
      //setAge(response.data.age) // gets the age only
      setPerson(response.data) // gets the complete information of the object
    })
  }

  // useEffect(() => {
  //   predictAge()
  // }, [])

  return (
    <div>
      <div className='container'>
        <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
        <button className='showBtn' onClick={predictAge}>Predict Age</button>
      </div>
      {/* <p>Predicted age: {age}</p> // for the age only */}
      <p>Name: {person?.name}</p> 
      <p>Predicted age: {person?.age}</p> 
      <p>Count: {person?.count}</p> 
    </div>
  )
}
/*
The question mark was used before the property because, initially, the object is set to null, so we can't access the property of a null, although, you can pass the useState argument as an empty object.
*/ 

export default App 