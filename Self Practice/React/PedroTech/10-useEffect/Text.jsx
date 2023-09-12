import {useState, useEffect} from 'react'

/*
the useEffect hook is used in react life cycle, these cycles are:
1. Mounting: When an element is being added into the DOM
2. Updating: When changes are being made to an element that is already added to the DOM
3. UnMounting: hen an element is being removed from the DOM
The useEffect can be used to trigger some certain functions in those cycles
*/ 
function Text() {
  const [text, setText] = useState('')

  useEffect(() => {
    console.log('COMPONENT MOUNTED')
    return () => {
      console.log('COMPONENT UNMOUNTED')
    }
  }, [text]) // The empty array is used to specify the state or props that you want to trigger the useEffect
  return (
    <div>
      <input onChange={(event) => {
        setText(event.target.value)
      }} />
      <h1>{text}</h1>
    </div>
  )
}
 
export default Text 