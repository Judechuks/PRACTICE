import {useState} from 'react'

function useToggle(initialVal = false) {
  const [state, setState] = useState(initialVal)

  const toggle = () => {
    setState((prev) => !prev)
  }

  return [state, toggle]  // allows userdefined (array)
  //return {state, toggle}  // userdefined not allowed, must be 'state and toggle' (object)
  // although there is a walk around. see the App component
}
 
export default useToggle 
/*
A hook is like a function, it allows a logic to 
be reused
*/ 