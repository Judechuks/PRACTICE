import React, { useState } from 'react';
import boxes from './Boxes';
import Box from './components/Box';

function App() {
  const [squares, setSquares] = useState(boxes)
  
  function toggleOn(id) {
    setSquares(prevSquares => {
      const newSquares = []
      //going through all the array to check matching id, if it matches,
      //it flips it, else it pushes it into a new array
      for (let i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i]
        if (currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on
          }
          newSquares.push(updatedSquare)
        }
        else {
          newSquares.push(currentSquare)
        }
      }
      return newSquares
    })
  }  

  const square = squares.map(square => (
    <Box key={square.id} id={square.id} on={square.on} toggle={toggleOn} />
  ))

  return (
    <div className="container">
      {square}
    </div>
  )
}

export default App
// it is a imparative approach because the for loop was used
// to perform the operation, instead a map method will be better