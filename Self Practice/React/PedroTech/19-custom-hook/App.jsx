import useToggle from './hook/useToggle'
/*
When creating a hook, it must start with 'use', 
Must not be used within a function of a component
Must be written in a component
*/ 
function App() {
  const [isVisible, toggle] = useToggle(false)
  /* const {isVisible, toggle} = useToggle() 
  then you can't use the custom name 'isVisible' except you do this it:
  const {state: isVisible, toggle} = useToggle() 
  */
  return (
    <div>
      <button className='btn' onClick={toggle}>
        {isVisible ? "Hide text" : "Show text"}
      </button>
      {isVisible && <h1>Hidden text</h1>}
    </div>
  )
}

export default App 