import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }
  const zero = () => {
    setCount(0)
  }

  return ( 
    <div className='w-fit mx-auto my-32'>
      <h2 className='text-6xl mb-3 text-center'>{count}</h2>
      <button onClick={increase} className='px-2 py-1 text-xl bg-green-700 text-white rounded-s-md'>
       Increase
      </button>
      <button onClick={zero} className='px-2 py-1 text-xl bg-red-700 text-white'>
       Set to Zero
      </button>
      <button onClick={decrease} className='px-2 py-1 x-4 text-xl bg-blue-700 text-white rounded-e-md'>
       Decrease
      </button>
    </div>
  )
}

export default App 