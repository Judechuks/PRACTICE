import { useState } from 'react'
import Text from './Text'

// Check the Text component to see the useEffect hook

function App() {
  const [showText, setShowtext] = useState(false)
  return (
    <div>
      <button className='showBtn' onClick={() => {
        setShowtext(!showText)
      }}>
        Show text
      </button>
      {showText && <Text />}
    </div>
  )
}
 
export default App 