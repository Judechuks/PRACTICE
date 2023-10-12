import React, {useState, useEffect} from 'react';
import WindowTracker from './components/WindowTracker';

function App() {
  const [show, setShow] = useState(true)

  // useEffect(() => {
  //   window.addEventListener("resize", function() {
  //     console.log('Resized!');
  //   })
  // }, []) 

  function toggle () {
    setShow(prevShow => !prevShow)
  }

  return (
    <div className="container">
      <button onClick={toggle} className='btn'>Toggle Window Tracker</button>
      {show && <WindowTracker />}
    </div>
  )
}

export default App
/* (Syncing 2 different state) 
In this example we will be interacting with the window, which is outside react (Virtual DOM)
so as a result useEffect will be used.
In this example, there is a memory leak, because the WindowTracker is only rendering when the 
parent (App.jsx) is allowing it to. So when the WindowTracker is toggled, it is no longer
rendered, hence the memory leak.
check the example for the better fix.
*/ 