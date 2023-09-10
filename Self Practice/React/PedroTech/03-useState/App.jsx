import {useState} from 'react'

function App() {
  const [age, setAge] = useState(0) // setting initial value to 0

  const increaseAge = () => {
    //setAge(5) // re-validating the initial value to 5
    setAge(age + 1) // incrementing the initial value by 1
  }

  return ( 
    <div className='text-xl px-2 pr-0 mx-auto my-3 bg-gray-500 w-fit'>
      {age} <button onClick={increaseAge} className='bg-blue-800 hover:bg-blue-900 transition duration-300 px-2 py-1 text-white'>Increase Age</button>
    </div>
  )
}

export default App 