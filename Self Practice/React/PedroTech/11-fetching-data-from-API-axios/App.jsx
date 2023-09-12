import { useState, useEffect} from 'react'
import Axios from 'axios'

/*Fetcging data from API using the fetch method
fetch('https://catfact.ninja/fact').then((response) => response.json()).then((data) => {console.log(data)})
Alternatively, you can use axios, 
In the terminal, go to the folder of the project, type:
npm install axios
then import axios in the project:
import Axios from 'axios'

*/ 
function App() {
  const [catFact, setCatFact] = useState('')

  const fetchCatFact = () => {
    Axios.get('https://catfact.ninja/fact').then((response) => {
      setCatFact(response.data.fact)
    })
  }

  useEffect(() => {
    fetchCatFact()
  }, [])

  return (
    <div>
      <button className='showBtn' onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  )
}
 
export default App 