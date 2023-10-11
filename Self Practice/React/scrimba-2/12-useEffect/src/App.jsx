import React, {useState, useEffect} from 'react';

function App() {
  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(1)

  console.log("Component Rendered!");

  //UseEffect (side effect, any occurrence outside the reach of react)
  useEffect(function() {
    console.log("Effect ran");
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json()).then(data => setStarWarsData(data))
  }, [count]) // [0] compared to [1] then runs again (or not)

  return (
    <div className="">
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)} className='btn'>Next</button>
    </div>
  )
}

export default App
/* UseEffect (side effect, any occurrence outside the reach of react) such as :
localStorage, API/database interactions, Subscriptions (e.g. web sockets), 
Syncing two different internal states together. 
The useEffect calls the function after the page has been rendered (ComponentDidMount) 
useEffect(() =>{}, [])
It has 2 major parameters; 'callback function' and optional 'dependencies array'
The callback is the function that runs the side effect codes
The optional Dependencies array is what specifies when the function should run.
The Dependencies array value when changes calls the callback function instead
of running on every render. If it is empty it calls the function once.
Usually what we use in our dependencies array is used in the callback function.
NOTE: the React Strict Mode will make the page to render twice (when the state changes)
we can remove the strict mode
*/