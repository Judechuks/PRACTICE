import {useCount} from "./hook/useCount"

function App() {
  const {count, increase, decrease, reset} = useCount(0)

  return ( 
    <div className='container w-fit mx-auto my-32'>
      <h1 className='text-6xl mb-3 text-center'>{count}</h1>
      <button onClick={increase} className='btn btn1 px-2 py-1 text-xl bg-green-700 text-white rounded-s-md'>
       Increase
      </button>
      <button onClick={reset} className='btn px-2 py-1 text-xl bg-blue-700 text-white'>
       Set to Zero
      </button>
      <button onClick={decrease} className='btn btn2 px-2 py-1 x-4 text-xl bg-red-700 text-white rounded-e-md'>
       Decrease
      </button>
    </div>
  )
}

export default App 