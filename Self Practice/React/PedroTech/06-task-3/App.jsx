import {useState} from 'react'

function App() {
  const [count, setState] = useState(0)

  const handleChange = () => {
    // setState(!showText)
  }

  return ( 
    <div className=''>
      <button onClick={handleChange} className='px-2 py-1 text-xl bg-blue-700 text-white'>
       Increase
      </button>
      <button onClick={handleChange} className='px-2 py-1 text-xl bg-blue-700 text-white'>
       Decrease
      </button>
      <button onClick={handleChange} className='px-2 py-1 text-xl bg-blue-700 text-white'>
       Set to Zero
      </button>
      <h2 className='text-3xl'>{count}</h2>
    </div>
  )
}

export default App 