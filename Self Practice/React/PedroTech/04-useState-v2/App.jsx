import {useState} from 'react'

function App() {
  const [inputValue, setInputValue] = useState("")

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return ( 
    <div className='px-2 pr-0 mx-auto my-2'>
      <label for="box" className='px-2 text-xl'>Write Something</label>
      <input onChange={handleChange} id='box' className='px-2 py-1 text-xl outline-blue-700 border border-blue-700' />
      <p>{inputValue}</p>
    </div>
  )
}

export default App 