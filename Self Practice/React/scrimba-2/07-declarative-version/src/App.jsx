import React, { useState } from 'react';
import boxes from './Boxes';
import Box from './components/Box';

function App() {
  const [squares, setSquares] = useState(boxes)
  
  function toggleOn(id) {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }  

  const square = squares.map(square => (
    <Box key={square.id} id={square.id} on={square.on} toggle={() => toggleOn(square.id)} />
  ))

  return (
    <div className="container">
      {square}
    </div>
  )
}

export default App