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
To fix this, when the WindowTracker is unmounted, then remove the 
event listener.
*/ 