import React, { useState } from 'react';

function App() {

  const [thingsArray, setThingsArray] = useState(['Thing 1', "Thing 2"]);

  function addItem() {
    setThingsArray(prevThingsArray => {
      return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
    })
  }
  
  const thingsElement = thingsArray.map(thing => <p key = {thing}>{thing}</p>)

  return (
    <div className="thingsContainer">
      <button className="btn" onClick={addItem}>Add Item</button>
      {thingsElement}
    </div>
  )
}

export default App