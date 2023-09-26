import React, {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(prevCount => prevCount + 1) // better
    // Alternatively, 
    // setCount(count + 1)
  }

  const subtract = () => {
    setCount(prevCount => prevCount - 1)
  }
  return (
    <div className="count-container">
      <button className="minus" onClick={subtract}>-</button>
      <div className="count">
        <h1>{count}</h1>
      </div>
      <button className="plus" onClick={add}>+</button>
    </div>
  )
}

export default App