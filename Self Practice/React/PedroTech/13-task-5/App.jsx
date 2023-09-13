import { useState, useEffect} from 'react'
import Axios from 'axios'
// 
function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState('') 
  
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
    .then((response) => {
      setGeneratedExcuse(response.data[0].excuse)
    })
  }

  return (
    <div className='container'>
      <h1>Generate an Excuse</h1>
      <div className='btnGroup'>
        <button className='btn' onClick={() => fetchExcuse('party')}>Party</button>
        <button className='btn' onClick={() => fetchExcuse('family')}>Family</button>
        <button className='btn' onClick={() => fetchExcuse('office')}>Office</button>
      </div>
      <p>{generatedExcuse}</p>
    </div>
  )
}

export default App 