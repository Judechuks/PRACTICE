import {useState} from 'react'

function App() {
  const [showText, setState] = useState(true)

  const handleChange = () => {
    setState(!showText)
  }

  return ( 
    <div className='px-2 pr-0 mx-auto my-2'>
      <button onClick={handleChange} className='px-2 py-1 text-xl bg-blue-700 text-white'>
       { showText ? 'Hide' : 'Show'} Text
      </button>
      <h2 className='text-3xl'>{showText && 'React is Fun'}</h2>
    </div>
  )
}

export default App 