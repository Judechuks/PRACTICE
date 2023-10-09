import React from 'react';
import Form from './components/Form';

function App() {

  return (
    <div className="container">
      <Form />
    </div>
  )
}

export default App
/* This is not ideal way of dealing with form, because
each input will be having its state and function, 
check the next example for a better alternative */