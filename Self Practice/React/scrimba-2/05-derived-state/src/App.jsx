import React, { useState } from 'react';
import boxes from './Boxes';
import Box from './components/Box';

function App() {
  const [squares, setSquares] = useState(boxes)

  const square = squares.map(square => (
    <Box key={square.id} on={square.on} />
  ))

  return (
    <div className="container">
      {square}
    </div>
  )
}

export default App
/*
This method isn't the best way of doing it, since each component is 
handling it state, instead, the state should be handled by the parent
(i.e App.jsx) and then passed on to the children as props
*/